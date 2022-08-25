import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useState } from "react";
export const CartContext = React.createContext();
const CartProvider = (props) => {
    const [itemsCarrito, setItemsCarrito] = useState([]);
    const sendOrder = (totalCarrito, clientData) => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders" );
        const order = {
            items: itemsCarrito,
            total: totalCarrito,
            client: clientData,
        };
        addDoc(orderCollection, order)
        .then((res) => console.log(res.id))
        .catch((err) => console.log("error", err));
    };
    const addItem = (item, amount) =>{
        const newItem = isInCart(item)
        if (newItem) {
            amount = amount + newItem.amount;
            setItemsCarrito(itemsCarrito.splice(
                itemsCarrito.findIndex((element) => element.item.id === item.id),
                 1
                )
            );
        }
        setItemsCarrito([...itemsCarrito, {item, amount}]);
    }
    const isInCart = (item) =>{
        
        return itemsCarrito.find(element => element.item === item)
    }
    const clear = () =>{
        setItemsCarrito([])
    }
    const remuveItem = (itemId) =>{
        setItemsCarrito(itemsCarrito.filter(element => element.item.id != itemId))
    }
    const total = () =>{
        return itemsCarrito.reduce(
            (valorAnterior, valorActual) => valorAnterior + (valorActual.item.price * valorActual.amount),0
            );
    }
    return ( 
        <CartContext.Provider value={{addItem, itemsCarrito, remuveItem, clear, total, sendOrder,}}>{props.children}</CartContext.Provider>
     );
}
 
export default CartProvider ;