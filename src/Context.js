import React, { useState, useEffect, useReducer } from "react"
import { productData } from './Data'

const Context = React.createContext()

//align-self-center mb-0 to make two stuffs align together on a straight line
//useReducer to group states that belong together

const initialState = {
  products: [],
  modalOpen: false,
  modalProduct: [],
  cartSubtotal: 0,
  cartTax: 0,
  cartTotal: 0,
  inputValue: '',
  searchItems: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'SEARCH_ITEMS':
      return {
        ...state,
        searchItems: action.payload
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        modalOpen: true,
        modalProduct: action.payload
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpen: false,
      }
    case 'CAL_SUBTOTAL':
      return {
        ...state,
        cartSubtotal: action.payload
      }
    case 'CAL_TAX':
      return {
        ...state,
        cartTax: action.payload
      }
    case 'CAL_TOTAL':
      return {
        ...state,
        cartTotal: action.payload
      }
    case 'GET_INPUT':
      return {
        ...state,
        inputValue: action.payload
      }
    default: 
      return {...state}
    

  }
}

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  let cachedItems = localStorage.getItem('itemsInCart')
  let myItems = JSON.parse(cachedItems)

  const [cartItems, setCartItems] = useState( cachedItems ? myItems : [])

  useEffect(() => {
    localStorage.setItem('itemsInCart', JSON.stringify(cartItems) )
  }, [cartItems]);
 

  useEffect(() => {
    dispatch({type: 'ADD_PRODUCTS', payload: productData})
  }, []);

  useEffect(() => {
    addTotal()
  }, [cartItems]);

   const addToCart = (addedItem) => {
    setCartItems(prevItem => [...prevItem, addedItem])
    addedItem.total = addedItem.price
    addedItem.inCart = true
    addedItem.count = 1
  }

  const openModal= (item) => {
    dispatch({ type: 'OPEN_MODAL', payload: item })
  }

  const closeModal =() =>{
    dispatch({ type: 'CLOSE_MODAL' })
  }

  const increment =(id) =>{
    const tempCart = [...cartItems]
    const increase = tempCart.find(item => item.id === id)
    increase.count = increase.count + 1


    let price = increase.price * increase.count
    increase.total = price

    console.log(increase.count)
    console.log(price)
    console.log(increase)


    setCartItems([...tempCart])
  }

  const decrement =(id) =>{
    const tempCart = [...cartItems]
    const increase = tempCart.find(item => item.id === id)

    increase.count = increase.count - 1

    if (increase.count < 1) {
      removeItem(id)
    }
    else {
      let price = increase.price * increase.count
      increase.total = price

      console.log(increase.count)
      console.log(price)
      console.log(increase)


      setCartItems([...tempCart])
    }
  }

  const removeItem=(id) =>{
    const filtered = cartItems.filter(item => item.id !== id)
    const deleted = cartItems.filter(item => item.id === id)
    deleted.map(item => item.inCart = false)
    deleted.map(item => item.count = 0)

    setCartItems(filtered)
  }

  const clearCart =() => {

    cartItems.map(item => item.inCart = false)
    cartItems.map(item => item.count = 0)
    setCartItems([])
  }

  const addTotal =() => {
    let subTotal = 0;
    cartItems.map(item => ( subTotal += parseFloat(item.total) ))
    const tax = parseFloat((subTotal * 0.1).toFixed(2))
    const total = (subTotal + tax).toFixed(2)
    dispatch({type: 'CAL_TAX', payload: tax})
    dispatch({type: 'CAL_SUBTOTAL', payload: subTotal})
    dispatch({type: 'CAL_TOTAL', payload: total})
  }

  const handleChange=(e)=> {
    dispatch({type: 'GET_INPUT', payload: e.target.value})
    console.log(state.inputValue)
  }

  const handleSubmit=(e)=> {
    e.preventDefault()
    const filtered = state.products.filter(product => product.product_type === state.inputValue || product.name === state.inputValue)
    dispatch({type: 'SEARCH_ITEMS', payload: filtered})
    console.log(state.searchItems)
  }

  const value = {
    cartItems, addToCart,
    openModal, closeModal, state,
    increment, decrement,
    removeItem, clearCart, handleChange,
    handleSubmit
  };



  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
