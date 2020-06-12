import React, { useContext } from 'react'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { Context } from '../Context'


function Cart(props) {
    const { cartItems, cartTotal, 
            increment, decrement, removeItem,
            cartTax, cartSubtotal, clearCart,  } = useContext(Context)
   
    if (cartItems.length > 0) {
        return(
       
                        <section>
                            
                            <h2 className='text-center'>Your Cart</h2>
                            <CartColumns />
                            <CartList 
                                      cartItems ={cartItems} 
                                      cartTotal = {cartTotal}
                                      increment={increment} 
                                      decrement={decrement}
                                      removeItem={removeItem}/>
                            <CartTotals 
                                      cartTax={cartTax} 
                                      cartSubtotal={cartSubtotal} 
                                      cartTotal={cartTotal} 
                                      clearCart={clearCart}
                                      history={props.history}/>
                        </section>
                    )
              

            }
        
           
    else {
        return <EmptyCart />
    }

}

export default Cart