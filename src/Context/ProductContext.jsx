import React, { createContext, useEffect, useState } from 'react'
export const ProductContext=createContext()
function ProductProvider({children}) {
    const[productsarr,setProductsarr]=useState(()=>{
        return JSON.parse(localStorage.getItem('productsarr')) || []
    })
     const[allproductsarr,setAllproductsarr]=useState(()=>{
        return JSON.parse(localStorage.getItem('allproductsarr')) || []
    })
     const[cart,setcart]=useState(()=>{
        return JSON.parse(localStorage.getItem('cart')) || []
    })
     const[fav,setfav]=useState(()=>{
        return JSON.parse(localStorage.getItem('fav')) || []
    })
    const fetchproducts=async()=>{
        try{
            let response=await fetch('https://dummyjson.com/products?limit=0')
            let data=await response.json()
            console.log(data.products)
            setProductsarr(data.products)
            setAllproductsarr(data.products)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        fetchproducts()
    },[])
    useEffect(()=>{
        localStorage.setItem('productsarr',JSON.stringify(productsarr))
    },[productsarr])
    useEffect(()=>{
        localStorage.setItem('allproductsarr',JSON.stringify(allproductsarr))
    },[allproductsarr])
     useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
     useEffect(()=>{
        localStorage.setItem('fav',JSON.stringify(fav))
    },[fav])
  return (
  <ProductContext.Provider value={{productsarr,setProductsarr,allproductsarr,setAllproductsarr,fav,setfav,cart,setcart}}>
    {children}
  </ProductContext.Provider>
  )
}

export default ProductProvider
