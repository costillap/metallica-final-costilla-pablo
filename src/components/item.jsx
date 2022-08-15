import { Link } from "react-router-dom";

const Item = ({item}) => {
    const {title, stock, category, id, img, price } = item;
    return(
    <div className="card" >
        <img src={img} className="card-img-top" style={{height: 350}} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>${price}</h6>
            <p className="card-text">{stock}</p>
            <p className="card-text">{category}</p>
            <Link to={`/Item/${id}`} className="btn btn-primary">Mas</Link>
        </div>
    </div>
    )
}
export default Item
