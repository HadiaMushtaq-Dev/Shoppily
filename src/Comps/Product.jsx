import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import "./Parts.css"
function Product(props) {
  const{allproductsarr,setcart,setfav}=useContext(ProductContext)
  const item=allproductsarr.find((p)=>p.id===props.id)
  return (
    <div className='productDetails'>
      <div className='cont1'>

      <h3>{item.title}</h3>
      <img src={item.thumbnail} alt={item.title}/>
      <p>Price : {Number((item.price/100)*20).toFixed(2)} $</p>
      </div>
      <div className='cont2'>
      <p>Description:</p>
      <p>{item.description}</p>
      {item.brand?
      <p>Brand : {item.brand}</p>:<p>Brand : Not Specified</p>
      }
      <p>Availability : {item.availabilityStatus}</p>
      <p>Shipping : {item.shippingInformation}</p>
      <p>Return Policy : {item.returnPolicy}</p>
      <p>Warranty : {item.warrantyInformation}</p>
      <button onClick={()=>setcart((prev)=>[...prev,{id:item.id,quantity:1,img:item.thumbnail,title:item.title,price:Number((item.price/100)*20).toFixed(2)}])}>Add to Cart</button>
      <button onClick={()=>setfav((prev)=>[...prev,{id:item.id,img:item.thumbnail,title:item.title,price:Number((item.price/100)*20).toFixed(2)}])}>Add to Wishlist</button>
      </div>
    </div>
  )
}

export default Product
