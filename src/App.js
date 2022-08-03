import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/navbar";
import {BrowserRouter} from "react-router-dom";
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/cart';
import CartProvider from './components/CartContext';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index path='/' element={<ItemListContainer/>}/>
            <Route path='item/:id' element={<ItemDetailContainer/>}/>        
            <Route path='*' element={<div className='container text-center col-2' style={{backgroundColor: "grey"}}>Error 404 Not Found</div>} />
            <Route path='/cart' element={<Cart/>}/>
        </Routes>  
      </BrowserRouter>
    </CartProvider>
      
    
    </>
  );
}

export default App;
