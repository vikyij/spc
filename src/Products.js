import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Context } from './Context'



import './home.css'


function Products({ product}) {
    const { addToCart, openModal, state} = useContext(Context)
    
    return (
        <>
            
            <div className='home-list' key={product.id}>

                <div className="card">
                    <div className='img-container'>
                        <Link to={`/${product.id}`}>
                            <img className="card-img-top img-card" src={product.image_link} alt={product.name} />
                        </Link>

                        <div className="card-body pt-4">
                            <p className="card-title"><b>{product.name}</b></p>
                            <p className="card-text">{product.product_type}</p>
                            <p className="card-text">{product.price_sign} {product.price} </p>
                            <button
                                className="btn btn-block btn-cart"
                                disabled={product.inCart ? true : false}
                                onClick={() => {
                                          addToCart(product)
                                          openModal(product)
                                          
                                          }}>
                                {product.inCart ? (<p style={{marginBottom: 0}} disabled>In Cart</p>) : (<p style={{marginBottom: 0}}>Add to Cart</p>)}
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )

}

Products.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        image_link: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}

export default Products