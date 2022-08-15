import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef).then((snapshot) => {
            const data = { id: snapshot.id, ...snapshot.data()};
            setItem(data);
       });
    },[])
    return <ItemDetail item={item}/>
}
export default ItemDetailContainer