import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBar from "./components/navbar"
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetalContainer from './components/itemDetailContainer';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route index path='/' element={<ItemListContainer/>}/>
        <Route path='item/:id' element={<ItemDetalContainer/>}/>        
        <Route path='*' element={<div className='container text-center col-2' style={{backgroundColor: "grey"}}>Error 404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
