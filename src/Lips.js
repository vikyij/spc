import React, { useContext, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context'

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


function Lips() {
    const [mystate, dispatch] = useReducer(Reducer, initialState)
    const { state, addToCart, openModal } = useContext(Context)
    const { products } = state

    const handleProductType = (e) => {
        dispatch({ type: 'GET_PRODUCTTYPE', payload: e.target.value })
    }

    const handleBrand = (e) => {
        dispatch({ type: 'GET_BRAND', payload: e.target.value })
        
    }

    const filteredLips = products.filter(product => {
        return (
            product.product_type === 'lip_liner' || product.product_type === 'lipstick' || product.product_type === 'lip_gloss' || product.product_type === 'lip_balm' 
        )
    })
    const filteredProductType = filteredLips.filter(product => product.product_type === mystate.productType)
    const filteredBrand = filteredLips.filter(product => product.brand === mystate.brand)
    console.log(filteredBrand)


    return (
        <div className='home'>
            <p className='eyes-heading'>LIPS</p>

            <div>

                <button className='btn ml-4 eyes-select' data-toggle="collapse" data-target="#demo">FILTER BY</button>

                <div id="demo" className="collapse">
                    <div className='card eyes-card'>
                        <div className='row'>
                            <div className='col-5'>
                                <p>product type</p>
                                <div className="form-check">
                                    <p><input type="checkbox" className="form-check-input" value="lipstick" onChange={(e) => handleProductType(e)} />Lipstick</p>
                                </div>

                                <div className="form-check">
                                    <p><input type="checkbox" className="form-check-input" value="lip_liner" onChange={(e) => handleProductType(e)} />Lipliner</p>
                                </div>

                                <div className="form-check">
                                    <p><input type="checkbox" className="form-check-input" value="lip_gloss" onChange={(e) => handleProductType(e)} />Lip Gloss</p>
                                </div>

                                <div className="form-check">
                                    <p><input type="checkbox" className="form-check-input" value="lip_balm" onChange={(e) => handleProductType(e)} />Lip Balm</p>
                                </div>
                            </div>


                            <div className='col-5'>
                                <p>Brand</p>
                                <div className="form-check">
                                    <p><input type="checkbox" className="form-check-input" value="colourpop" onChange={(e) => handleBrand(e)} />Colourpop</p>
                                </div>
                                <div className="form-check">
                                    <p><input type="checkbox" className="form-check-input" value="clinique" onChange={(e) => handleBrand(e)} />Clinique</p>
                                </div>
                                <div className="form-check">
                                    <p><input type="checkbox" className="form-check-input" value="chanel" onChange={(e) => handleBrand(e)} />Chanel</p>
                                </div>
                                <div className="form-check">
                                    <p><input type="checkbox" className="form-check-input" value="mac" onChange={(e) => handleBrand(e)} />MAC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row eyes-list'>
                {mystate.checkedProductType ? 

                    filteredProductType.map(product => {
                        return (
                                <div className='col-sm-6 col-lg-3 mb-3 eyes-col'>
                                    <div className="card">
                                        <div className='img-container'>

                                            <Link to={`/${product.id}`}>
                                                <img className="card-img-top img-card" src={product.image_link} alt={product.name} />
                                            </Link>
                                            <div className="card-body">
                                                <h4 className="card-title">{product.name}</h4>
                                                <p className="card-text">{product.product_type}</p>
                                                <p className="card-text"> {product.price_sign} {product.price}</p>
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
                  mystate.checkedBrand ?
                  
                  filteredBrand.map(product => {
                    return (
                            <div className='col-sm-6 col-lg-3 mb-3 eyes-col'>
                                <div className="card">
                                    <div className='img-container'>

                                        <Link to={`/${product.id}`}>
                                            <img className="card-img-top img-card" src={product.image_link} alt={product.name} />
                                        </Link>
                                        <div className="card-body">
                                            <h4 className="card-title">{product.name}</h4>
                                            <p className="card-text">{product.product_type}</p>
                                            <p className="card-text"> {product.price_sign} {product.price}</p>
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
                
                filteredLips.map(product => {
                    return (
                            <div className='col-sm-6 col-lg-3 mb-3 eyes-col' key={product.id}>
                                <div className="card">
                                    <div className='img-container'>

                                        <Link to={`/${product.id}`}>
                                            <img className="card-img-top img-card" src={product.image_link} alt={product.name} />
                                        </Link>
                                        <div className="card-body">
                                            <h4 className="card-title">{product.name}</h4>
                                            <p className="card-text">{product.product_type}</p>
                                            <p className="card-text"> {product.price_sign} {product.price}</p>
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

export default Lips