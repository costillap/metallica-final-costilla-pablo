import { Button } from "bootstrap";
import { useState } from "react";

const ItemCount = () => {
    const stock=10
    const [count, setCount] = useState(0);
    const sumarCarrito = (operacion) => {
        if (operacion === "-") {
            if (count === 0){
                
            }else setCount(count-1)
        }else if (count < stock) {
            setCount(count+1)
        }
    }
    return ( 
        <>
            <div className="card text-center text-white bg-dark border-danger ms-auto" style={{width : 160}}>
                <div className="card-body">
                    <h5 className="card-title m-1 fs-5">CART</h5>
                    <div className="card-title fs-2">{count}</div>
                    <button onClick={() => sumarCarrito("-")} className="btn btn-outline-danger m-2">-</button>
                    <button onClick={() => sumarCarrito("+")} className="btn btn-outline-danger m-2">+</button>
                    <button className="btn-primary m-2">COMPRAR</button>
                </div>
            </div>
        </>
        
     );
}
 
export default ItemCount ;