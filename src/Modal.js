import React, {useContext} from 'react'
import {Context} from './Context'
import { Link } from 'react-router-dom'

import './modal.css'

function Modal() {
    const {modalOpen, modalProduct, closeModal} = useContext(Context)
   

    if(!modalOpen) {
        return null
    }
    else {
         return (
        <div className='container'>
            <div className='row'>
                {modalProduct.map(product => {
                    return(
                        <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
                        <h5>Item added to the cart</h5>
                        <img src={product.image_link} className='img-fluid'/>
                        <h5>{product.name}</h5>
                        <h5 className='text-muted'>price : {product.price_sign} {product.price}</h5>
                        <Link to='/'>
                        <button className="btn btn-block btn-cart m-1" onClick={() => closeModal() }>
                            Back to shop
                        </button>
                        </Link>
    
                        <Link to='/cart'>
                        <button className="btn btn-block btn-cart m-1" onClick={() => closeModal() }>
                            go to cart
                        </button>
                        </Link>
                    </div>  
                    )
                })}
             
            </div>

        </div>

    )

    }
   

}

export default Modal