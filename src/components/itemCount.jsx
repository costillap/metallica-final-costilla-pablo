import React from "react";
import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0);
    const SumarCarrito = (operacion) => {
        if (operacion === "-") {
            if (count === 0){
                
            }else setCount(count-1)
        }else if (count < stock) {
            setCount(count+1)
        }
    }
    return ( 
        <>
            <div className="row mx-auto my-2">
                <div className="col-5 my-auto fs-3">Cantidad: {count}</div>
                <button onClick={() => SumarCarrito("-")} className="btn btn-outline-danger m-1 col-1">-</button>
                <button onClick={() => SumarCarrito("+")} className="btn btn-outline-danger m-1 col-1">+</button>
                <button onClick={() => {onAdd(count);}} disabled={count === 0} className="btn btn-info m-1 col-3">Comprar</button>

            </div>
                    
        </>
        
     );
}
 
export default ItemCount ;
