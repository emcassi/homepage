import React from 'react'
import "./Technology.css"

function Technology(props) {
  return (
    <div className='tech'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
    </div>
  )
}

export default Technology