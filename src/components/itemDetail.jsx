import { Link, useNavigate } from "react-router-dom";
import ItemCount from "./itemCount";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";


const ItemDetail = ({item} ) => {
    const [amount, setAmount] = useState(0);
    const {title, stock, category, detalle, img, price} = item;
    const navigate = useNavigate();
    const {addItem} = useContext(CartContext);
    const onAdd= (amount) =>{
        addItem(item, amount);
        //navigate("/cart")
    };
    console.log({addItem});
    return(
    <div className="container my-5">
        <div className="card col-6 mx-auto" >
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6>${price}</h6>
                <p className="card-text">{stock}</p>
                <p className="card-text">{category}</p>
                <p className="card-text">{detalle}</p>
                <div className="col p-1 text-center mt-5">
                    {(amount === 0) && <ItemCount stock={stock} initial={0} onAdd={onAdd}  className=""></ItemCount>}
                    <Link to={"/"} className="btn btn-danger row m-1">cerrar</Link>
                </div>
                
            </div>
        </div>
    </div>
    
    )
}
export default ItemDetail