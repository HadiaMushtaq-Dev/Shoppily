import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HashRouter} from 'react-router-dom'
import ProductProvider from "./Context/ProductContext.jsx"

createRoot(document.getElementById('root')).render(
  <ProductProvider>
  <HashRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </HashRouter>
  </ProductProvider>
)
