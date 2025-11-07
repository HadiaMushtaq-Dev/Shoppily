import React from 'react'
import "./Page.css"
import {  useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (
    <div className='home'>
        <div className='sale'>
            <p>Flat 20% off on all items !</p>
        </div>
      <div className='home1'>
        <div>
            <h1>Biggest Sale of the Year is live Now ...</h1>
            <button onClick={()=>navigate("/Products")}>Start Shopping</button>

        </div>
            <img src="bag.png" alt="shopping bag"/>
      </div>
     
    </div>
  )
}

export default Home
