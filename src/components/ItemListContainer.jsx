import React from "react";
import { useState, useEffect} from "react";
import ItemList from "./itemList";

const ItemListContainer = ({greeting}) => {
    const itemsdata = [{
        "id": 1,
        "title": "Fork in the Road, A",
        "stock": 4,
        "category": "32.78.24.218"
      }, {
        "id": 2,
        "title": "The Land Before Time X: The Great Longneck Migration",
        "stock": 4,
        "category": "234.130.245.9"
      }, {
        "id": 3,
        "title": "Bed & Board (Domicile conjugal)",
        "stock": 9,
        "category": "24.78.122.163"
      }, {
        "id": 4,
        "title": "Meu Passado Me Condena: O Filme",
        "stock": 7,
        "category": "56.59.176.171"
      }, {
        "id": 5,
        "title": "McCullin",
        "stock": 1,
        "category": "137.131.102.221"
      }, {
        "id": 6,
        "title": "Chicago Massacre: Richard Speck",
        "stock": 8,
        "category": "141.68.125.221"
      }, {
        "id": 7,
        "title": "Sense & Sensibility",
        "stock": 9,
        "category": "199.91.216.252"
      }, {
        "id": 8,
        "title": "Ghost Story",
        "stock": 2,
        "category": "82.196.99.140"
      }]
      let [items, setItems] = useState([]);
      console.log(items)
      useEffect(
        () => {let promiseItems = new Promise ((resolve, reject) => {
            setTimeout(
                () => {
                    resolve(itemsdata)
                },
                2000);
          })
          promiseItems.then(
            (respuesta) => {
                setItems(itemsdata);
                
            }
          )},
          []
      )
      
    return ( 
    <>
        <p className="container text-light fs-2 text-center p-5 m-5 mx-auto ">{greeting}</p>
        <ItemList items={items}/>
    </>
        
     );
}

 
export default ItemListContainer;

/**/