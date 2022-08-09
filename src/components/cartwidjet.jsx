import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import logo from "./img/cart.png";
const CartWidjet = () => {
  const {itemsCarrito} = useContext(CartContext)
  return (
    
    <>
      {itemsCarrito.length === 0 ?
        <></> : <img style={{width:30}} src={logo} alt=""/>
      }
    </>
  );
};
 
export default  CartWidjet;