import React, { useContext, useEffect } from 'react'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { Context } from '../Context'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function Cart(props) {
    const { state,cartItems,
        increment, decrement, removeItem,
        clearCart } = useContext(Context)
    const { cartTotal, cartTax, cartSubtotal  } = state

   /**   const notify = () => toast(`Welcome ${props.location.state.uname}`)
     
     useEffect(()=>
     {
         notify()
          
     }, [props.location.state.uname])
    
     **/

    if (cartItems.length > 0) {

        return (

            <section className='cart-section'>
                <ToastContainer />

                <h2 className='text-center cart-h2'>Your Cart</h2>
                <CartColumns />
                <CartList
                    cartItems={cartItems}
                    cartTotal={cartTotal}
                    increment={increment}
                    decrement={decrement}
                    removeItem={removeItem} />
                <CartTotals
                    cartTax={cartTax}
                    cartSubtotal={cartSubtotal}
                    cartTotal={cartTotal}
                    clearCart={clearCart}
                    history={props.history} />
            </section>
        )


    }


    else {
        return <EmptyCart />
    }

}

export default Cart