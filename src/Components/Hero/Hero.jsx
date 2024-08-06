import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.webp'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero-image.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
      </div>

      <div>
        <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
        </div>
        <p>Collections</p>
        <p>For Everyone</p>
      </div>

      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" />

        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
