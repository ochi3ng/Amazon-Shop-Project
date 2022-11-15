import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'


function NavBar() {
  const cart=useSelector((state)=>state.counter.cart)
  const navigate=useNavigate()
  const CartDetails=()=>{
    navigate('/cart')
  }
  return (
    <div className='navbar'>
        <img className='nav' src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578'/>
        <img className='menu-icon' src='https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-64.png'/>
         <div>  
        <div className='select' >select</div>
        <div className='category'>category </div>
        </div>
       <div className='header'>
         <input className='input' type="search" placeholder='search'/>
        <img className='search' src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png'/>
        <img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sb0weeNZ-84VtmdJVg94xZnkmb3wy_twmfFjuNk&s'/>
       </div>
           <div className='logo-header'>
      <img onClick={CartDetails} className='logo-basket' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgaoIL8olHQQgghKVD5jAGvhLYm9nJijOUKPbN8Dmt-KbKnzaikV-P3_BmeOGG4QKTlg&usqp=CAU'/>
      <h1 className='number'>{cart.length}</h1>
      </div>
    </div>
  )
}

export default NavBar