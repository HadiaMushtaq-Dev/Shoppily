import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import "./Parts.css"
function SearchBar() {
    const{setProductsarr,allproductsarr}=useContext(ProductContext)
    const[val,setval]=useState('')
    const[val1,setval1]=useState('')
    function search(){
        const arr=allproductsarr.filter((p)=>p.title.toLowerCase().includes(val.trim().toLowerCase()))
        setProductsarr(arr)
    }
    function search1(){
         const arr=allproductsarr.filter((p)=>p.category.toLowerCase().includes(val1.toLowerCase()))
        setProductsarr(arr)
    }
    useEffect(()=>{
        search()
    },[val])
    useEffect(()=>{
        search1()
    },[val1])
  return (
    <div className='srch'>
      <input type='text' placeholder='Enter Product Name ' onChange={(e)=>setval(e.target.value)} value={val}/>
      <select onChange={(e)=>setval1(e.target.value)}>
        <option value=''>Filter By Category</option>
        <option value='beauty'>Beauty</option>
        <option value='fragrances'>Fragrances</option>
        <option value='furniture'>Furniture</option>
        <option value='groceries'>Groceries</option>
        <option value='home-decoration'>Home Decoration</option>
        <option value='kitchen-accessories'>Kitchen Accessories</option>
        <option value='Laptops'>Laptops</option>
        <option value='mens-shirts'>Men's Shirts</option>
        <option value='mens-shoes'>Men's Shoes</option>
        <option value='mobile-accessories'>Mobile Accessories</option>
        <option value='motorcycle'>Motorcycle</option>
        <option value='skin-care'>Skin Care</option>
        <option value='smartphones'>Smartphones</option>
        <option value='sports-accessories'>Sports Accessories</option>
        <option value='sunglasses'>Sunglasses</option>
        <option value='tablets'>Tablets</option>
        <option value='tops'>Tops</option>
        <option value='womens-bag'>Womens Bag</option>
        <option value='womens-dresses'>Womens Dresses</option>
        <option value='womens-jewellery'>Womens Jewellery</option>
        <option value='womens-shoes'>Womens Shoes</option>
      </select>
    </div>
  )
}

export default SearchBar
