import React from "react";
export const CartContext = React.createContext();
const CartProvider = (props) => {
    return ( 
        <CartContext.Provider value={"hola"}>{props.children}</CartContext.Provider>
     );
}
 
export default CartProvider ;