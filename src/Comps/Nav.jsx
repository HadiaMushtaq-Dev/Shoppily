import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./Parts.css"
function Nav() {
    const location=useLocation()
    const[tab,setTab]=useState(location.pathname)
    const[nav,displayNav]=useState(false)
    useEffect(()=>{
        setTab(location.pathname)
    },[location.pathname])
  return (
    <div className='nav'>
      <div className='nav1'>
        <div className='logo'>
          <img src='shopping-cart (1).png' alt="cart"/>
          <p>Shoppily</p>
        </div>
        <div className='menu'>
          <img src='menu.png' alt="menu" onClick={()=>displayNav(true)}/>
          {nav?
        <nav className='nav-small'>
          <p onClick={()=>displayNav(false)} className='cross1'> X</p>
      <Link to="/" className={tab==='/'?"link":"link1"}>Home</Link>
      <Link to="/Products" className={tab==='/Products'?"link":"link1"}>Products</Link>
      <Link to="/Cart" className={tab==='/Cart'?"link":"link1"}>Cart</Link>
      <Link to="/Wishlist" className={tab==='/Wishlist'?"link":"link1"}>Wishlist</Link>
      <Link to="/Account" className={tab==='/Account'?"link":"link1"}>Account</Link>
        </nav>:<></>
          }
        </div>
         <nav className='nav-large'>
      <Link to="/" className={tab==='/'?"link":"link1"}>Home</Link>
      <Link to="/Products" className={tab==='/Products'?"link":"link1"}>Products</Link>
      <Link to="/Cart" className={tab==='/Cart'?"link":"link1"}>Cart</Link>
      <Link to="/Wishlist" className={tab==='/Wishlist'?"link":"link1"}>Wishlist</Link>
      <Link to="/Account" className={tab==='/Account'?"link":"link1"}>Account</Link>
        </nav>
      </div>
    </div>
  )
}

export default Nav

