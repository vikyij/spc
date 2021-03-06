import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context'
import Slider from './Slider'
import Products from './Products'




import './home.css'


function ProductList() {
    const { state } = useContext(Context)
    const { products, searchItems } = state


   
    return (
        <>

            <div className='home'>
                

                {searchItems.length === 0 ?

                    (<><p className='home-heading'>SHOP BY CATEGORY</p>

                        <div className='row home-row'>

                            <div className='col-md-3'>
                                <Link to='/eyes'><button type="button" class="btn btn-block home-btn">EYES</button></Link>
                            </div>

                            <div className='col-md-3'>
                                <Link to='/lips'><button type="button" class="btn btn-block home-btn">LIPS</button></Link>
                            </div>

                            <div className='col-md-3'>
                                <Link to='/face'><button type="button" class="btn btn-block home-btn">FACE</button></Link>
                            </div>

                            <div className='col-md-3'>
                                <Link to='/nails'><button type="button" class="btn btn-block home-btn">NAILS</button></Link>
                            </div>

                        </div>
                    </>
                    ) : null
                }

                {searchItems.length === 0 ?
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

                    </div> :

                    <div className='product-layout'>

                        {searchItems.map(product => {
                            return (
                                <Products
                                    key={product.id}
                                    product={product}
                                />
                            )
                        }
                        )}

                    </div>
                }


            </div>
        </>
    )




}

export default ProductList