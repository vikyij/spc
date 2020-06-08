import React from 'react'
import CartItem from './CartItem'

function CartList({cartItems, count, cartTotal, increment, decrement, removeItem}){
    
    return (
        <div className='container-fluid'>
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
        
        </div>
    )
}

export default CartList