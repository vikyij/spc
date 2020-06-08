import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context'
import Slider from './Slider'
import Products from './Products'


import './home.css'


function ProductList() {
    const { products } = useContext(Context)


    return (
        <>

            <div className='home'>
                <p className='home-heading'>SHOP BY CATEGORY</p>

                <div className='row home-row'>

                    <div className='col-md-3'>
                        <button type="button" class="btn btn-block home-btn"><Link to='/eyes'>EYES</Link></button>
                    </div>

                    <div className='col-md-3'>
                        <button type="button" class="btn btn-block home-btn"><Link to='/lips'>LIPS</Link></button>
                    </div>

                    <div className='col-md-3'>
                        <button type="button" class="btn btn-block home-btn"><Link to='/face'>FACE</Link></button>
                    </div>

                    <div className='col-md-3'>
                        <button type="button" class="btn btn-block home-btn"><Link to='/nails'>NAILS</Link></button>
                    </div>

                </div>

                <div className='product-layout'>

                    {products.map(product => {
                        return (
                            <Products 
                            key={product.id} 
                            product={product} 
                            />
                        )
                    }
                    )}

                </div>
            </div>
        </>
    )




}

export default ProductList