import { Link } from "react-router-dom";

const Item = ({item}) => {
    const {title, stock, category, id, img } = item;
    return(
    <div className="card" >
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{stock}</p>
            <p className="card-text">{category}</p>
            <Link to={`item/${id}`} className="btn btn-primary">Mas</Link>
        </div>
    </div>
    )
}
export default Item
/*style={{width: 400}}*/