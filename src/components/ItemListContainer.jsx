import React from "react";
import { useState, useEffect} from "react";
import ItemList from "./itemList";
import data from "./utils/data.json"

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const promise = new Promise((resolve) => {
        setTimeout( () => resolve(data), 1000);
    });
    useEffect(() => {
        promise.then((res) => setItems(data));
        }, []);
    return ( 
    <>
        <p className="container text-light fs-2 text-center p-5 m-5 mx-auto ">{greeting}</p>
        <div className="mt-5">
            <ItemList items={items}/>
        </div>
        
    </>
        
     );
}
 
export default ItemListContainer;

/**/