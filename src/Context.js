import React, { useState, useEffect, useReducer } from "react"
import { productData } from './Data'

const Context = React.createContext()

//align-self-center mb-0 to make two stuffs align together on a straight line
//useReducer to group states that belong together

function ContextProvider({ children }) {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState([])
  const [cartSubtotal, setCartSubtotal] = useState(0)
  const [cartTax, setCartTax] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const initialState ={
    products: []
  }

 

  useEffect(() => {
    setProducts(productData)
  }, []);

  useEffect(() => {
    addTotal()
  }, [cartItems]);

  function addToCart(addedItem) {
    setCartItems(prevItem => [...prevItem, addedItem])
    addedItem.total = addedItem.price
    addedItem.inCart = true
    addedItem.count = 1
  }

  function openModal(item) {
    setModalProduct([item])
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  function increment(id) {
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

  function decrement(id) {
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

  function removeItem(id) {
    const filtered = cartItems.filter(item => item.id !== id)
    const deleted = cartItems.filter(item => item.id === id)
    deleted.map(item => item.inCart = false)
    deleted.map(item => item.count = 0)

    setCartItems(filtered)
  }

  function clearCart() {
   
    cartItems.map(item => item.inCart = false)
    cartItems.map(item => item.count = 0)
    setCartItems([])
  }

  function addTotal() {
    let subTotal = 0;
    cartItems.map(item => (subTotal += parseFloat(item.total)))
    const tax = parseFloat((subTotal * 0.1).toFixed(2))
    const total = subTotal + tax
    setCartTax(tax)
    setCartSubtotal(subTotal)
    setCartTotal(total)
  }

  const value = {
    products, cartItems, addToCart,
    openModal, closeModal, modalOpen,
    modalProduct, increment, decrement,
    removeItem, clearCart, cartSubtotal,
    cartTax, cartTotal
  };



  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
