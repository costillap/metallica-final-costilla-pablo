import React from "react";
import { useState, useEffect} from "react";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs } from "firebase/firestore"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemListContainer = ({}) => {
    const { type } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const itemColletions = collection(db, "items");
        const itemsDocuments = getDocs(itemColletions).then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
            if (type){
                setItems(data.filter((product) => product.category == type))
            }else
                setItems(data);
        });
    }, [type]);
    return ( 
    <>
        <div className='container text-center'>
        <Link to={"/category/dvd"} className="btn btn-info m-1 col-1 fs-5">dvd</Link>
        <Link to={"/category/cd"} className="btn btn-info m-1 col-1 fs-5">cd</Link>
        </div>
        <div className="mt-5">
            <ItemList items={items}/>
        </div>
    </>
    );
}
export default ItemListContainer;




/**/
 /*const db = getFirestore();
        const docRef = doc(db, "tiems", "Ac1INFbo2PFozwdfLu0c");
        getDoc(docRef).then((snapshot) => {
            const data = { id: snapshot.id, ...snapshot.data()};
       });*/



      

        /*const db = getFirestore();
        const itemColletions = collection(db, "items");
        const filteredCollection = query(
            itemColletions, 
            where("title", "==", "Master of Puppets")
        );
        getDocs(filteredCollection).then(snapshot => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            console.log(data);
        });
        */
        