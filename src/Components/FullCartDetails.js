import React from 'react'
import './FullCartDetails.css'


function FullCartDetails(prop) {
  return (
    <div className='header-fullcart'>
        <div className='fullDetails'>
        <img className='cartimage' src={prop.image}/>
       
      <div className='Header-cart'>  
      <div className='title'>{prop.title}</div>
        <div>Kshs {prop.price}</div>
       </div>
        </div>
    </div>
  )
}

export default FullCartDetails