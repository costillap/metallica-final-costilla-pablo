import React from "react";
import { useState } from "react";
export const CartContext = React.createContext();
const CartProvider = (props) => {
    const [itemsCarrito, setItemsCarrito] = useState([])
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
    return ( 
        <CartContext.Provider value={{addItem, itemsCarrito}}>{props.children}</CartContext.Provider>
     );
}
 
export default CartProvider ;