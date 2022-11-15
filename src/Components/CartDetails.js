import React, { useState } from 'react'
import { useEffect } from 'react';
import { getPosts } from './CounterSlice';
import { useSelector,useDispatch } from 'react-redux'
import FullCartDetails from './FullCartDetails'
import BackToHomePage from './BackToHomePage';
import EmptyPage from './EmptyPage';

function CartDetails() {
    const cart=useSelector((state)=>state.counter.cart)
    const [total,setTotal]=useState(0)
    


    const CulculateTotal =()=>{
        let total=0
        for(let item of cart){
          total += item.price
        }
        setTotal(total)
    }
    useEffect(()=>{
        CulculateTotal()
    },[])

  return (
    <div>
 {cart.length < 1 ? <div>{ <EmptyPage/>}</div> :    <div>
    {cart.map((item)=><FullCartDetails title={item.title} image={item.image} price={item.price} />)}
      <div>Total {total}</div>
    </div>}
      <BackToHomePage/>
    </div>
  )
}

export default CartDetails