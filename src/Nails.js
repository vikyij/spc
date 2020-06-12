import React, {useContext} from 'react'
import {Context} from './Context'


function Nails() {
    const {products} = useContext(Context)
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
                                <img class="card-img-top img-card" src={product.image_link} alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">{product.name}</h4>
                                    <p class="card-text">{product.product_type}</p>
                                    <p class="card-text"> {product.price_sign} {product.price}</p>
                                    <a href="#" class="btn btn-block stretched-link btn-cart">Add to Cart</a>
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