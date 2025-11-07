import React, { useContext, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import ProductCard from '../Comps/ProductCard'
import "./Page.css"
import Product from '../Comps/Product'
import SearchBar from '../Comps/SearchBar'
function Products() {
  const{productsarr}=useContext(ProductContext)
  const[showdetails,setShowdetails]=useState(false)
  const[id,setId]=useState(0)
  return (
    <div className='product'>
      {showdetails?
      <div className='details'>
        <p onClick={()=>setShowdetails(false)} className='cross'>X</p>
        <Product id={id}/>

      </div>:<></>
      }
      <div className='product1'>
            <SearchBar/>
            <ProductCard productsarr={productsarr} setShowdetails={setShowdetails} setId={setId}/>
      </div>
    </div>
  )
}

export default Products
