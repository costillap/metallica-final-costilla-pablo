import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBar from "./components/navbar"
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"When a man lies he murders some part of the world. These are the pale deaths which men miscall their lives. All this I cannot bear to witness any longer. Cannot the kingdom of salvation take me home...(To live is to die)"}/>  
    </>
  );
}

export default App;
