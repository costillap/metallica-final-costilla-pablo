import { createContext } from "react";
export const Gcontext = createContext();

const CartContext = ({clildren}) => {
    return <Gcontext.Provider value={"hola"} >{clildren}</Gcontext.Provider>
    
};
 
export default CartContext