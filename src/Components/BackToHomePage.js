import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackToHomePage() {
    const navigate=useNavigate()
    const HomePage=()=>{
        navigate('/home')
      }
  return (
    <div>
         <button className='homepagebatton' onClick={HomePage}>Back To HomePage</button>
    </div>
  )
}

export default BackToHomePage