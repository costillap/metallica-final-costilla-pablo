const ItemDetail = ({item}) => {
    const {title, stock, category, detalle } = item;
    return(
    <div className="card" >
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{stock}</p>
            <p className="card-text">{category}</p>
            <p className="card-text">{detalle}</p>
            <a href="#" className="btn btn-primary"></a>
        </div>
    </div>
    )
}
export default ItemDetail