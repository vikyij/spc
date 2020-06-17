import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import './cart.css'

function CartItem({item, increment, decrement, removeItem}) {
    const {id, name, image_link, price, price_sign, total, count} = item
    return (
        <div className='row my-2 text-capitalize text-center'>
           <div className='col-10 mx-auto col-lg-2'>
               <img 
                    src={image_link}
                    style={{width:'5rem', height:'5rem'}} 
                    className='img-fluid' 
                    alt='cartImage' />
           </div>

           <div className='col-10 mx-auto col-lg-2'>
               <span className='d-lg-none'>Product :</span>
               {name}
           </div>

           <div className='col-10 mx-auto col-lg-2'>
               <span className='d-lg-none'>Price :</span>
               {price_sign} {price}
           </div>

           <div className='col-10 mx-auto col-lg-2 '>
               <div className='d-flex'>
                   <div>
                       <span className='btn btn-black mx-1' onClick={() => decrement(id)}>-</span>
                       <span className='btn btn-black mx-1'> { count } </span>
                       <span className='btn btn-black mx-1' onClick={() => increment(id)}>+</span>

                   </div>
               </div>
           </div>

           <div className='col-10 mx-auto col-lg-2'>
              <div className='del-icon' onClick={() => removeItem(id)}>
                  <FaRegTrashAlt />
              </div>
           </div>

           <div className='col-10 mx-auto col-lg-2'>
               <strong>total : {price_sign} {total}</strong>
           </div>

        </div>
    )
}

export default CartItem