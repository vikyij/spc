import React from 'react'

import './eyes.css'


import image1 from './images/raychan-oEpUUCO_ru0-unsplash.jpg'
import image2 from './images/lippie-pencil_grande.jpg'
import image3 from './images/brain-freeze_a_800x1200.jpg'

function Eyes() {
    return (
        <div className='home'>
            <p className='eyes-heading'>EYES</p>

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
    )
}

export default Eyes