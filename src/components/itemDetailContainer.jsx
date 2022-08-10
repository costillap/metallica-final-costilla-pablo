import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useState } from "react";
import data from "./utils/Data.json"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams();
    const promise = new Promise((resolve) =>{
        setTimeout(() => resolve(data), 1000)
    });
    useEffect(()=>{
        promise.then((response) =>{
            const foundItem = response.filter(item => item.id == id)
            setItem(foundItem[0]);
        })
    })
    return <ItemDetail item={item}/>
}
export default ItemDetailContainer