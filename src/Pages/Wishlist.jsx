import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import "./Page.css"
function Wishlist() {
  const{fav,setfav}=useContext(ProductContext)
  function removeItem(id){
    const arr=fav.filter((f)=>f.id!==id)
    setfav(arr)
  }
  return (
    <div className='product'>
      <div className='product1'>

      {fav.length>0?
        <div className='grid'>
      {fav.map((f)=>(
        <div className='items' key={f.id}>
          <img src={f.img} alt={f.title}/>
         <h2>{f.title}</h2>
         <p className='price2'>Discounted Price : {f.price} $</p>
         <button onClick={()=>removeItem(f.id)}>Remove</button>
        </div>
      ))}
          </div>:<div className='product2'>
        <p>No items added yet!</p></div>}
    </div>
    </div>
  )
}

export default Wishlist
