import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Provide both global states: Products and Cart */}
      <ProductProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
)
