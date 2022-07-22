import { Link } from "react-router-dom";


const ItemDetail = ({item} ) => {
    const {title, stock, category, detalle, img} = item;
    return(
    <div className="container">
        <div className="card col-6 mx-auto" >
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{stock}</p>
                <p className="card-text">{category}</p>
                <p className="card-text">{detalle}</p>
                <Link to={"/"} className="btn btn-primary">cerrar</Link>
            </div>
        </div>
    </div>
    
    )
}
export default ItemDetail