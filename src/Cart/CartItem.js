import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import './cart.css'

function CartItem({item, increment, decrement, removeItem}) {
    const {id, name, image_link, price, price_sign, total, count} = item
    return (
        
        <div className='row my-2 text-capitalize cart-row text-center'>
           <div className='col-12 mx-auto col-lg-2 '>
               <img 
                    src={image_link}
                    className='img-fluid cart-img' 
                    alt='cartImage' />
           </div>

           <div className='col-12 mx-auto col-lg-2 pt-2'>
               <span className='d-lg-none'><b>Product</b> :</span>
               {name}
           </div>

           <div className='col-12 mx-auto col-lg-2 p-2' >
               <span className='d-lg-none'><b>Price</b> :</span>
               {price_sign} {price}
           </div>

           <div className='col-12 mx-auto col-lg-2 p-2'>
               <div className='d-flex cart-qty'>
                   <div>
                       <span className='btn btn-black mx-1' onClick={() => decrement(id)}>-</span>
                       <span className='btn btn-black mx-1'> { count } </span>
                       <span className='btn btn-black mx-1' onClick={() => increment(id)}>+</span>

                   </div>
               </div>
           </div>

           <div className='col-12 mx-auto col-lg-2' >
              <div className='del-icon' onClick={() => removeItem(id)}>
                  <FaRegTrashAlt />
              </div>
           </div>

           <div className='col-12 mx-auto col-lg-2'>
               <strong>total :</strong> {price_sign} {total}
           </div>

        </div>
     
   )
}

export default CartItem