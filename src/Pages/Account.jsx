import React, { useState } from 'react'
import "./Page.css"
import { Link } from 'react-router-dom'
function Account(props) {
  const[val,setval]=useState('')
  const[val1,setval1]=useState('')
  const[login,isLogin]=useState(false)
  function handleClick(e){
    e.preventDefault()
    validate()
  }
  function validate(){
    let check=true
    if(val.trim()===''){
      alert("Enter valid Username")
      check=false
    }
    if(val1.length<8){
      alert("Password must be 8 digit long")
      check=false
    }
    if(check){
      props.setLoggedIn(true)
      isLogin(true)
    
    }
   
  }
  return (
    <div className='account'>
      {login?
      <div className='alert'>
        <p className='cross' onClick={()=>isLogin(false)}>X</p>
        <p>Login Successful</p>
        <div className='view'>

        <Link to='/Cart' className='view1'>View my cart</Link>
        <Link to='/Wishlist' className='view1'>View my Favourities</Link>
        </div>
      </div>:<></>
      }
    <form onSubmit={handleClick}>
      <h2>Enter your name:</h2>
         <input type='text' placeholder='Username' required onChange={(e)=>setval(e.target.value)} value={val}/>
      <h2>Enter your password:</h2>
         <input type='password' placeholder='Password' required onChange={(e)=>setval1(e.target.value)} value={val1}/>
         <p>Password must be alphanumeric, at least 8 characters long and contain a special character (@,#,$,%,...)</p>
         <button type='submit'>Log in</button>
    </form>
    </div>
  )
}

export default Account
