import React from "react";
function ItemList(props) {
    return (
        <>
       
        {
            props.items.map(
            cadaItem =>{
                return (<div className="card mx-auto" style={{width:400}}>
                    <p>{cadaItem.title}</p>
                    <p>{cadaItem.stock}</p>
                    <p>{cadaItem.category}</p>
                </div>)
                }
            )
        }
        </>
       
        
    );
}
export default ItemList