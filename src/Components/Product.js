import React from 'react'
import './Product.css'
import { useState } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {AddToCart} from './CounterSlice'
function Product({title,image,price}) {
      const cart=useSelector((state)=>state.counter.cart)
     
          const dispatch=useDispatch()
         function handleAddToCart(value){
             dispatch(AddToCart({title, image,price}))
         } 
  return (   
   <div className='productContainer'>
   
           <div>
            
         <div className='border'>
               <img className='image' src={image}/>
               <div className='title'>{title}</div>
               <div className='rating-container'>
                <div className='rate'>Rate</div>
                <img className='ratingStar' src="https://cdn.iconscout.com/icon/free/png-256/star-rating-five-compare-review-best-33662.png"/>
               </div>
              <div className='addToCart-container'>
              <div className='price' >Kshs {price}</div>
               <button className='addtocart' onClick={handleAddToCart} key={title}>Add To Cart</button>
              </div>
           </div>
           </div>
          
   </div>
  )
}

export default Product