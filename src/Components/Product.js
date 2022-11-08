import React from 'react'
import './Product.css'

function Product(prop) {
  return (
   <div className='productContainer'>
   <div className='title'>{prop.title}</div>
    <img className='image' src={prop.image}/>
    <div className='price' >Kshs {prop.price}</div>
   </div>
  )
}

export default Product