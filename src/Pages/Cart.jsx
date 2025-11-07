import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import "./Page.css"
function Cart() {
  const[display,setDisplay]=useState(false)
  const[loader,setloader]=useState(false)
  const{cart,setcart}=useContext(ProductContext)

  function handleClicked(e){
      e.preventDefault()
       setDisplay(true)
       setloader(true)
       setTimeout(()=>(
          setloader(false)
       ),3000)
       setcart([])
  }
  const[price,setprice]=useState(0)
  function inc(id){
    const item=cart.map((c)=>{return(
      c.id===id ?{...c,quantity:c.quantity+1}:c)})
    setcart(item)
    
  }
   function dec(id,quantity){
    if(quantity<=1){
         const item=cart.filter((c)=>c.id!==id)
         setcart(item)
    }else{
    const item=cart.map((c)=>{return(
      c.id===id ?{...c,quantity:c.quantity-1}:c)})
    setcart(item)
    }
    
  }
  function total(){
  const p = cart.reduce((accumulator, item) => {
  return accumulator + (item.quantity*item.price);
}, 0);
    setprice(p)
  }
  useEffect(()=>{
    total()
  },[cart])
  return (
    <div className='cart'>
      {display?
      <div className='alert2'>
       {loader?
        <div className='loader'>

        </div>:<></>
       }
        <p>Order Confirmed! Email has been sent</p>
        <button onClick={()=>setDisplay(false)}>Close</button>
      </div>:<></>
      }
      <div className='cart1'>
      {cart.length>0?
      
      cart.map((c)=>(
        <div key={c.id} className='item'> 
           <img src={c.img} alt={c.title}/>
          <p className='p1'>{c.title}</p>
          <p>{c.price * c.quantity} $</p>
          <div className='btn'>
            <button onClick={()=>inc(c.id)}>+</button>
            <p>{c.quantity}</p>
            <button onClick={()=>dec(c.id,c.quantity)}>-</button>
          </div>
        </div>
      )):<div className='product2'>
        <p>No items added yet</p></div>}
    </div>
    <form className='form1' onSubmit={handleClicked}>
      <input type='text' placeholder='Enter name' required/>
      <input type='email' placeholder='Enter email address' required/>
      <input type='text' placeholder='Enter address' required/>
      <select required>
        <option value=''>Select Payment Method</option>
        <option value='COD'>Cash on Delivery</option>
        <option value='Online'>Online Transaction</option>
      </select>
        <p>Total price = {price} $</p>
        <button type='submit'>Checkout</button>
    </form>
    </div>
  )
}

export default Cart
