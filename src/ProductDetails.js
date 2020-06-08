import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from './Context'



function ProductDetails(props) {
    const { products, cartItems, addToCart, openModal } = useContext(Context)

    const { productsId } = useParams()

    const thisProduct = products.filter(product => product.id == productsId)

    return (

        <div className='row m-5'>
            {thisProduct.map(product => {
                return (
                    <>
                    <div className='col-6'>
                        <img className="card-img-top img-card" src={product.image_link} alt='images' />
                    </div>

                    <div className='col-6 mt-2'>
                        <h2 classname='mx-auto my-3 text-capitalize'>{product.name}</h2>
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



    )
}

export default ProductDetails