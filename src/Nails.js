import React, {useContext, useReducer} from 'react'
import { Link } from 'react-router-dom'
import {Context} from './Context'

const initialState = {
    checkedProductType: false,
    checkedBrand: false,
    productType: '',
    brand: ''
}

function Reducer(state, action) {
    switch (action.type) {
        case 'GET_PRODUCTTYPE':
            return {
                ...state,
                checkedProductType: !state.checkedProductType,
                productType: action.payload
            }
        case 'GET_BRAND':
            return {
                ...state,
                checkedBrand: !state.checkedBrand,
                brand: action.payload
            }
        default:
            return { ...state }
    }
}

function Nails() {
    const [mystate, dispatch] = useReducer(Reducer, initialState)
    const { state, addToCart,openModal } = useContext(Context)
    const { products } = state

    const handleProductType = (e) => {
        dispatch({ type: 'GET_PRODUCTTYPE', payload: e.target.value })
    }

    const handleBrand = (e) => {
        dispatch({ type: 'GET_BRAND', payload: e.target.value })
        
    }

    const filteredNails = products.filter(product => {
        return (
            product.product_type === 'nail_polish' || product.product_type === 'nail_extension' 
        )
    })
    const filteredProductType = filteredNails.filter(product => product.product_type === mystate.productType)
    const filteredBrand = filteredNails.filter(product => product.brand === mystate.brand)
    console.log(filteredBrand)


    return (
        <div className='home'>
            <p className='eyes-heading'>NAILS</p>

            <div>

<button className='btn ml-4 eyes-select' data-toggle="collapse" data-target="#demo">FILTER BY</button>

<div id="demo" class="collapse">
    <div className='card eyes-card'>
        <div className='row'>
            <div className='col-5'>
                <p>product type</p>
                <div class="form-check">
                    <p><input type="checkbox" class="form-check-input" value="nail_polish" onChange={(e) => handleProductType(e)} />Nail Polish</p>
                </div>

                <div class="form-check">
                    <p><input type="checkbox" class="form-check-input" value="nail_extension" onChange={(e) => handleProductType(e)} />Nail Extension</p>
                </div>
            </div>


            <div className='col-5'>
                <p>Brand</p>
                <div class="form-check">
                    <p><input type="checkbox" class="form-check-input" value="dior" onChange={(e) => handleBrand(e)} />Dior</p>
                </div>
                <div class="form-check">
                    <p><input type="checkbox" class="form-check-input" value="esse" onChange={(e) => handleBrand(e)} />Esse</p>
                </div>
                <div class="form-check">
                    <p><input type="checkbox" class="form-check-input" value="chanel" onChange={(e) => handleBrand(e)} />Chanel</p>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>



            <div className='row eyes-list'>
                { mystate.checkedProductType ?
                
                filteredProductType.map(product => {
                    return (
                     <div className='col-sm-6 col-lg-3 mb-3 eyes-col'>
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
                }) : mystate.checkedBrand ?

                filteredBrand.map(product => {
                    return (
                     <div className='col-sm-6 col-lg-3 mb-3 eyes-col'>
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
                }) :

                filteredNails.map(product => {
                    return (
                     <div className='col-sm-6 col-lg-3 mb-3 eyes-col'>
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

export default Nails