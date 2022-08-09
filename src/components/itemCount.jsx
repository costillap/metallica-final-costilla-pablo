
import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {
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
            <div className="row mx-auto my-2">
                <div className="col-5 my-auto fs-3">Cantidad: {count}</div>
                <button onClick={() => sumarCarrito("-")} className="btn btn-outline-danger m-1 col-1">-</button>
                <button onClick={() => sumarCarrito("+")} className="btn btn-outline-danger m-1 col-1">+</button>
                <button onClick={() => {onAdd(count); alert("Cantidad de items agregados: "+count)}} disabled={count === 0} className="btn btn-info m-1 col-3">Agregar</button>

            </div>
                    
        </>
        
     );
}
 
export default ItemCount ;
/* <div className="text-center text-white bg-dark border-danger ms-auto" style={{width : 160}}>
                <div className="card-body">
                    <h5 className="card-title m-1 fs-5">CARRITO</h5>
                    <div className="card-title fs-3">{count}</div>
                    <button onClick={() => sumarCarrito("-")} className="btn btn-outline-danger m-2">-</button>
                    <button onClick={() => sumarCarrito("+")} className="btn btn-outline-danger m-2">+</button>
                    <button disabled={count === 0} className="btn btn-info m-2">COMPRAR</button>
                </div>
            </div> */