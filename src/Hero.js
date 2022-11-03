import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
        <div className="hero-left__content">
            <h1>I'm Alex :)</h1>
            <h2>aspiring software developer</h2>
            <p>I make web apps with React and mobile apps - natively with Swift and cross-platform with Flutter</p>
        </div>
        </div>
        <div className="hero-right">
            <img src="res/hero.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero