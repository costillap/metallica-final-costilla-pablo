import React from "react";

 const CartItem = ({item, amount, remuveItem}) => {
    return ( 
        <div className="flex text-info m-3">
            {item.title} - {amount}
            <button className="btn-danger mx-3 my-2" onClick={() => remuveItem(item.id)}>Eliminar</button>
        </div>
     );
 }
  
 
 export default CartItem;