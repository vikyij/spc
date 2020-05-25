import React from 'react'
import Slider from './Slider'

import './home.css'


import image1 from './images/raychan-oEpUUCO_ru0-unsplash.jpg'
import image2 from './images/lippie-pencil_grande.jpg'
import image3 from './images/brain-freeze_a_800x1200.jpg'

function Home() {
    return (
        <>
        <Slider />
        <div className='home'>
            <p className='home-heading'>SHOP BY CATEGORY</p>

            <div className='row home-row'>

                <div className='col-md-3'>
                    <button type="button" class="btn btn-block home-btn">EYES</button>
                </div>

                <div className='col-md-3'>
                    <button type="button" class="btn btn-block home-btn">LIPS</button>
                </div>

                <div className='col-md-3'>
                    <button type="button" class="btn btn-block home-btn">FACE</button>
                </div>

                <div className='col-md-3'>
                    <button type="button" class="btn btn-block home-btn">NAILS</button>
                </div>

            </div>

            <div className='row home-list'>
                <div className='col-md-3'>
                    <div class="card">
                        <img class="card-img-top img-card" src={image1} alt="Card image" />
                            <div class="card-body">
                                <h4 class="card-title">Lip Gloss</h4>
                                <p class="card-text">cushiony glassy shine.</p>
                                <p class="card-text"> $3.00</p>                           
                                <a href="#" class="btn btn-block stretched-link btn-cart">Add to Cart</a>
                            </div>
                    </div>
                    </div>
                    <div className='col-md-3'>
                    <div class="card">
                        <img class="card-img-top img-card" src={image2} alt="Card image" />
                            <div class="card-body">
                                <h4 class="card-title">Lip Gloss</h4>
                                <p class="card-text">cushiony glassy shine.</p>
                                <p class="card-text"> $3.00</p>                           
                                <a href="#" class="btn btn-block stretched-link btn-cart">Add to Cart</a>
                            </div>
                    </div>
                    </div>
                    <div className='col-md-3'>
                    <div class="card">
                        <img class="card-img-top img-card" src={image3} alt="Card image" />
                            <div class="card-body">
                                <h4 class="card-title">Lip Gloss</h4>
                                <p class="card-text">cushiony glassy shine.</p>
                                <p class="card-text"> $3.00</p>                           
                                <a href="#" class="btn btn-block stretched-link btn-cart">Add to Cart</a>
                            </div>
                    </div>
                    </div>
                    <div className='col-md-3'>
                    <div class="card">
                        <img class="card-img-top img-card" src={image1} alt="Card image" />
                            <div class="card-body">
                                <h4 class="card-title">Lip Gloss</h4>
                                <p class="card-text">cushiony glassy shine.</p>
                                <p class="card-text"> $3.00</p>                           
                                <a href="#" class="btn btn-block stretched-link btn-cart">Add to Cart</a>
                            </div>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home