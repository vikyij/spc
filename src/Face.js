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


function Face() {
    const [mystate, dispatch] = useReducer(Reducer, initialState)
    const { state, addToCart, openModal } = useContext(Context)
    const { products } = state

    const handleProductType = (e) => {
        dispatch({ type: 'GET_PRODUCTTYPE', payload: e.target.value })
    }

    const handleBrand = (e) => {
        dispatch({ type: 'GET_BRAND', payload: e.target.value })

    }

    const filteredFace = products.filter(product => {
        return (
            product.product_type === 'blush' || product.product_type === 'bronzer' || product.product_type === 'foundation' || product.product_type === 'concealer'
        )
    })
    const filteredProductType = filteredFace.filter(product => product.product_type === mystate.productType)
    const filteredBrand = filteredFace.filter(product => product.brand === mystate.brand)
    console.log(filteredBrand)

    return (
        <div className='home'>
            <p className='eyes-heading'>FACE</p>

            <div>

                <button className='btn ml-4 eyes-select' data-toggle="collapse" data-target="#demo">FILTER BY</button>

                <div id="demo" class="collapse">
                    <div className='eyes-card'>
                        <div className='row m-3'>
                            <div className='col-5'>
                                <p><b>product type</b></p>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="foundation" onChange={(e) => handleProductType(e)} />Foundation</p>
                                </div>

                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="concealer" onChange={(e) => handleProductType(e)} />Concealer</p>
                                </div>

                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="blush" onChange={(e) => handleProductType(e)} />Blush</p>
                                </div>

                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="bronzer" onChange={(e) => handleProductType(e)} />Bronzer</p>
                                </div>
                            </div>


                            <div className='col-5'>
                                <p><b>Brand</b></p>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="classic" onChange={(e) => handleBrand(e)} />Classic</p>
                                </div>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="fenty" onChange={(e) => handleBrand(e)} />Fenty Beauty</p>
                                </div>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="physicians-formula" onChange={(e) => handleBrand(e)} />Physicians Formula</p>
                                </div>
                                <div class="form-check">
                                    <p><input type="checkbox" class="form-check-input" value="mac" onChange={(e) => handleBrand(e)} />MAC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row eyes-list'>
                {
                    mystate.checkedProductType ?
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
                        }) :

                        mystate.checkedBrand ?
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

                            filteredFace.map(product => {
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

export default Face