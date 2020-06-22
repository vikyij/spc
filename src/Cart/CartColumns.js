import React from 'react'

function CartColumns() {
    return (
        <div className='container-fluid text-center d-none d-lg-block cart-columns'>
            <div className='row'>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'><b>products</b></p>
                </div>


                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'><b>name of product</b></p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'><b>price</b></p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'><b>quantity</b></p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'><b>remove</b></p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'><b>total</b></p>
                </div>
            </div>
        </div>
    )
}

export default CartColumns