
import {Route,Routes,Navigate} from 'react-router-dom'
import './App.css'
import Nav from "./Comps/Nav"
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Account from './Pages/Account'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import { useState } from 'react'
function App() {
 
  const[loggedIn,setLoggedIn]=useState(false)
 function ProtectedRoute({children,loggedIn}){
      if(!loggedIn){
        return <Navigate to="/Account"/>
      }
      else
      return children
 }
  return (
      <>
       <Nav/>
      <div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Wishlist" element={<ProtectedRoute loggedIn={loggedIn}><Wishlist/></ProtectedRoute>}/>
          <Route path="/Account" element={<Account setLoggedIn={setLoggedIn}/>}/>
          <Route path="/Cart" element={<ProtectedRoute loggedIn={loggedIn}><Cart/></ProtectedRoute>}/>
        </Routes>
      
    </div>
    </>
  )
}

export default App
