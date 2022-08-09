import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItem from "./cartItem";

const Cart = () => {
  const {itemsCarrito, remuveItem, clear, total} = useContext(CartContext);
  const totalCarrito = total()
  return (
    
    <>
    {itemsCarrito.length === 0 ? (
      <h1 className="fs-2">
      no hay items<Link to={"/"} className="text-info nav-link">volver</Link>
      </h1>
    ) : (
      <>
        {itemsCarrito.map((element) => (
          <CartItem item={element.item} amount={element.amount} remuveItem ={remuveItem}/>
        ))}
        <button className="btn-danger" onClick={()=> clear()}>Vaciar carrito</button>
        <h1>total carrito: {totalCarrito}</h1>
      </>
    )}
    </>
  );
};
 
export default Cart;