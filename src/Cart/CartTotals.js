import React from 'react'
import { Link } from 'react-router-dom'

function CartTotals({ cartTax, cartSubtotal, cartTotal, clearCart }) {

    return (
        <div className='row'>
            <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                <Link to='/'>
                    <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button' onClick={() => clearCart()}>
                        clear cart
                  </button>
                </Link>

                <h5>
                    <span>subTotal: </span>
                    <strong>${cartSubtotal}</strong>
                </h5>

                <h5>
                    <span>Tax: </span>
                    <strong>${cartTax}</strong>
                </h5>

                <h5>
                    <span>Total: </span>
                    <strong>${cartTotal}</strong>
                </h5>

            </div>

        </div>
    )
}

export default CartTotals