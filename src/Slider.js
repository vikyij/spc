import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import './slider.css'

import image1 from './images/raychan-oEpUUCO_ru0-unsplash.jpg'
import image2 from './images/lippie-pencil_grande.jpg'
import image3 from './images/brain-freeze_a_800x1200.jpg'

function Slider() {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className='header-slide'>
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={2000}
        >
            <div data-src={image1} />
            <div data-src={image2} />
            <div data-src={image3} />
        </AutoplaySlider>
      </div>
    )
}

export default Slider