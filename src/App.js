import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import CartProvider from './components/CartContext';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index path='/' element={<ItemListContainer/>}/>
            <Route path='Item/:id' element={<ItemDetailContainer/>}/>        
            <Route path='*' element={<div className='container text-center col-2' style={{backgroundColor: "grey"}}>Error 404 Not Found</div>} />
            <Route path='/Cart' element={<Cart/>}/>
        </Routes>  
      </BrowserRouter>
    </CartProvider>
      
    
    </>
  );
}

export default App;
