import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {Context} from './Context'


function Nails() {
    const { state, addToCart,openModal } = useContext(Context)
    const { products } = state

    return (
        <div className='home'>
            <p className='eyes-heading'>NAILS</p>

            <div className="eyes-select">
                <select className="form-control">
                    <option className='select-header'>FILTER BY</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>

            <div className="eyes-select">
                <select className="form-control">
                    <option className='select-header'>SORT BY</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>

          
            <div className='row eyes-list'>
                {
                
                products.map(product => {
                    return (
                     product.product_type === 'nail_polish' ? 
                     <div className='col-md-3'>
                     <div class="card">
                     <div className='img-container'>

                         <Link to={`/${product.id}`}>
                             <img className="card-img-top img-card" src={product.image_link} alt={product.name} />
                         </Link>
                         <div class="card-body">
                             <h4 class="card-title">{product.name}</h4>
                             <p class="card-text">{product.product_type}</p>
                             <p class="card-text"> {product.price_sign} {product.price}</p>
                             <button
                                 className="btn btn-block btn-cart"
                                 disabled={product.inCart ? true : false}
                                 onClick={() => {
                                     addToCart(product)
                                     openModal(product)

                                 }}>
                                 {product.inCart ? (<p disabled>In Cart</p>) : (<p>Add to Cart</p>)}
                             </button>

                         </div>
                    </div>
                     </div>
                 </div> : null
        
                    ) 
                }) 
                }

               
            </div>

            

        </div>
    )
}

export default Nails