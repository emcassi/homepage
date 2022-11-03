import React from 'react'
import Hero from './Hero'
import './Body.css'
import Technologies from './Technologies'
import Github from './Github'

function Body() {
  return (
    <div className='body'>
        <Hero/>
        <Technologies/>
        <Github/>
    </div>
  )
}

export default Body