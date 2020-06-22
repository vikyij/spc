import React, { useContext } from 'react'
import { Context } from './Context'
import { Link, useHistory, useLocation} from 'react-router-dom'

import './modal.css'



function Modal() {
    const { state, closeModal } = useContext(Context)
    const { modalProduct, modalOpen } = state

    let history = useHistory()
    let location = useLocation()
   

    console.log(location)

    if (!modalOpen) {
        return null
    }
    else {
        return (
            <div className='modal-container'>
                <div className='row modal-row'>
                    <div id='modal' className='col-8 mx-auto text-center text-capitalize p-5'>
                        <h5>Item added to the cart</h5>
                        <img src={modalProduct.image_link} className='img-fluid modal-img' />
                        <h5 style={{ margin: '15px' }}>{modalProduct.name}</h5>
                        <h5 style={{ marginBottom: '30px' }} className='text-muted'>price : {modalProduct.price_sign} {modalProduct.price}</h5>
                        {location.pathname !== '/' ?
                            <button className="btn btn-block btn-cart m-1" onClick={() => {
                                closeModal()
                                history.push(location.pathname)
                            }}>Back to shop</button>
                            :
                            <button className="btn btn-block btn-cart m-1" onClick={() => {
                                closeModal()
                                history.push('/')
                            }}>Back to shop</button>

                        }


                    <Link to='/login'>
                        <button className="btn btn-block btn-cart m-1" onClick={() => closeModal()}>
                            go to cart
                        </button>
                    </Link>
                </div>



            </div>

            </div >

        )

    }


}

export default Modal