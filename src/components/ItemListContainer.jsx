import React from "react";
import { useState, useEffect} from "react";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const itemColletions = collection(db, "items");
        const itemsDocuments = getDocs(itemColletions).then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
            setItems(data);
            setLoading(false)
        });
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
        