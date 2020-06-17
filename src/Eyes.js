import React, { useContext, useReducer,useState} from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context'

import './eyes.css'
const initialState = {
    checkedProductType: false,
    checkedPrice: false,
    text: '',
    price: ''
}

function Reducer(state,action ) {
    switch(action.type){
        case 'GET_PRODUCTTYPE': 
           return{
               ...state,
               checkedProductType: !state.checkedProductType,
               text: action.payload
           }
           case 'GET_PRICE': 
           return{
               ...state,
               checkedPrice: !state.checkedPrice,
               price: action.payload
           }
        default:
            return {...state}
    }
}


function Eyes() {
    const [mystate, dispatch] = useReducer(Reducer, initialState)
    const { state, addToCart, openModal } = useContext(Context)
    const { products } = state


    const handleProduct = (e) => {
        dispatch({type: 'GET_PRODUCTTYPE', payload: e.target.value})
    }

    const handlePrice = (e) => {
        dispatch({type: 'GET_PRICE', payload: e.target.value})
        console.log(mystate.price)
    }
    
    const filteredEyes = products.filter(product => {
        return (
        product.product_type === 'eyeliner' || product.product_type ==='eyeshadow' || product.product_type ==='mascara' || product.product_type ==='eyelashes' 
    )
    })
    const filtered = filteredEyes.filter(product => product.product_type === mystate.text)
    const filteredPrice = filteredEyes.filter(product => product.price <= mystate.price)
    console.log(filteredPrice)

    return (
        <div className='home'>
            <p className='eyes-heading'>EYES</p>

            <div>

                <button className='btn eyes-select' data-toggle="collapse" data-target="#demo">FILTER BY</button>

                <div id="demo" class="collapse">
                    <div className='card eyes-card'>
                        <div className='row'>
                            <div className='col-4'>
                                <p>product type</p>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="eyeliner" onChange={(e) => handleProduct(e)}/>EyeLiner</p>
                                </div>

                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="eyeshadow" onChange={(e) => handleProduct(e)}/>EyeShadow</p>
                                </div>

                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="mascara" onChange={(e) => handleProduct(e)}/>Mascara</p>
                                </div>

                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="eyelashes" onChange={(e) => handleProduct(e)} />Eyelashes</p>
                                </div>
                            </div>

                            <div className='col-4'>
                                <p>brand</p>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="" />clinique</p>
                                </div>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="" />Iman</p>
                                </div>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="" />Zaron</p>
                                </div>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="" />Classic</p>
                                </div>

                            </div>

                            <div className='col-4'>
                                <p>price</p>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="5" onChange={(e) => handlePrice(e)} />under $5</p>
                                </div>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="10" onChange={(e) => handlePrice(e)} />$5 - $9.99</p>
                                </div>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="20" onChange={(e) => handlePrice(e)} />$10 - $19.99</p>
                                </div>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="30" onChange={(e) => handlePrice(e)} />$20 - 30$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row eyes-list'>
                { mystate.checkedProductType ? 
                   filtered.map(product => {
                       return(
                        <div className='col-md-3'>
                        <div class="card">
                            <div className='img-container'>
                                <Link to={`/${product.id}`}>
                                    <img className="card-img-top img-card" src={product.image_link} alt={product.name} />
                                </Link>
                                <div class="card-body">
                                    <h4 class="card-title">{product.name}</h4>
                                    <p class="card-text">{product.product_type}</p>
                                    <p class="card-text"> {product.price_sign} {product.price}</p>
                                    <button
                                        className="btn btn-block btn-cart"
                                        disabled={product.inCart ? true : false}
                                        onClick={() => {
                                            addToCart(product)
                                            openModal(product)

                                        }}>
                                        {product.inCart ? (<p disabled>In Cart</p>) : (<p>Add to Cart</p>)}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div> 
                       )
                   })
                :

                    filteredEyes.map(product => {
                        return (
                                <div className='col-md-3'>
                                    <div class="card">
                                        <div className='img-container'>
                                            <Link to={`/${product.id}`}>
                                                <img className="card-img-top img-card" src={product.image_link} alt={product.name} />
                                            </Link>
                                            <div class="card-body">
                                                <h4 class="card-title">{product.name}</h4>
                                                <p class="card-text">{product.product_type}</p>
                                                <p class="card-text"> {product.price_sign} {product.price}</p>
                                                <button
                                                    className="btn btn-block btn-cart"
                                                    disabled={product.inCart ? true : false}
                                                    onClick={() => {
                                                        addToCart(product)
                                                        openModal(product)

                                                    }}>
                                                    {product.inCart ? (<p disabled>In Cart</p>) : (<p>Add to Cart</p>)}
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                        )
                    })
                }


            </div>

        </div>
    )
}

export default Eyes