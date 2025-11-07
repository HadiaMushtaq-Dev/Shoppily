import React from 'react'
import "./Parts.css"
function ProductCard(props) {
  return (
    <div className='grid'>
         {props.productsarr.length>0?
      props.productsarr.map((p)=>(
        <div key={p.id} className='items'>
          <img src={p.thumbnail} alt={p.title}/>
          <h2>{p.title}</h2>
          <div className='pp'>
          {/* <p>Discounted Price </p> */}
          <p className='price'>Was {Number(p.price).toFixed(2)} $ </p>
          <p className='price1'>Now {Number((p.price/100)*20).toFixed(2)} $</p>
          </div>
          <button onClick={()=>{props.setShowdetails(true)
            props.setId(p.id)
          }}>View Details</button>
        </div>
      )):<div>
        <p>Oops! Something went wrong...</p></div>}
    </div>
  )
}

export default ProductCard
