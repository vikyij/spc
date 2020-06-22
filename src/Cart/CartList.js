import React from 'react'
import CartItem from './CartItem'

function CartList({cartItems, cartTotal, increment, decrement, removeItem}){
    
    return (
        <>
            {
                cartItems.map(item => {
                    return <CartItem key={item.id} 
                           item={item} 
                           cartTotal={cartTotal}
                           increment={increment} 
                           decrement={decrement}
                           removeItem={removeItem}/>
                })
            }
        
        </>
    )
}

export default CartList