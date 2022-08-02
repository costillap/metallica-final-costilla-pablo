import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer"; 
import ItemDetailContainer from "./itemDetailContainer";
import Cart from "./cart"; 


const RoutesContainer = () => {
    return (
        <Routes>
            <Route index path='/' element={<ItemListContainer/>}/>
            <Route path='item/:id' element={<ItemDetailContainer/>}/>        
            <Route path='*' element={<div className='container text-center col-2' style={{backgroundColor: "grey"}}>Error 404 Not Found</div>} />
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      );
}
 
export default RoutesContainer;