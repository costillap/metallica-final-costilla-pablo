import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import React from 'react';
import NavBar from "./components/navbar";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import RoutesContainer from './components/route';
import CartContext from './components/cartContext';


function App() {
  return (
    <>
    <CartContext>
      <BrowserRouter>
        <NavBar/>
        <RoutesContainer/>  
      </BrowserRouter>
    </CartContext>
    </>
  );
}

export default App;
