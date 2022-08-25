import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const {itemsCarrito, remuveItem, clear, total, sendOrder} = useContext(CartContext);
  const totalCarrito = total();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(totalCarrito, {name: data[0], mail: data[1], phone: data[2]});
  }
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
        <h1 className="text-white">total carrito: ${totalCarrito}</h1>
        <form onSubmit={handleSubmit}>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <button
          //onClick={() => sendOrder(totalCarrito)}
          type="submit"
          className="btn btn-success"
          >
          Enviar Orden
          </button>
        </form>
      </>
    )}
    </>
  );
};
 
export default Cart;