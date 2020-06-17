import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from './Context'

import './productdetails.css'

function ProductDetails() {
    const { state, addToCart, openModal } = useContext(Context)
    const {products } = state

    const { productsId } = useParams()

    const thisProduct = products.filter(product => product.id == productsId)

    return (
    <div className='container'>
        <div className='row pd'>
            {thisProduct.map(product => {
                return (
                    <>
                    <div className='col-sm-4 mt-3'>
                        <img className="card-img-top img-card" src={product.image_link} alt='images' />
                    </div>

                    <div className='col-sm-6 mx-3'>
                        <h2 className='mx-auto my-3 text-capitalize'>{product.name}</h2>
                        <h4 className='text-uppercase mt-3 mb-2'>{product.product_type}</h4>
                        <h4><strong>{product.price_sign} {product.price}</strong></h4>
                        <p className='mt-3 text-muted'>{product.description}</p>
                        <Link to='/'><button className='btn btn-cart mr-2'>Back to Products</button></Link>

                        <button
                            disabled={product.inCart ? true : false}
                            className='btn btn-cart'
                            onClick={() => {
                                             addToCart(product)
                                             openModal(product)
                                             }}>
                            {product.inCart ? 'Incart' : 'Add to Cart'}
                        </button>
                    </div>
                </>
                )
            })}




        </div>

    </div>

    )
}

export default ProductDetails