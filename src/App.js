
import './App.css';
import Aviso from './Components/Aviso/Aviso'
import NavBar from './Components/navBar/navBar';
import Titulo from './Components/Titulo/Title';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './Components/ItemDetailConteiner/ItemDetailConteiner';
import {useState} from 'react'
import ItemCount from './Components/ItemCount/ItemCount';

function App() {

const [vista, setVista] = useState("lista")
const detailId = vista.split("-")[1]

  return (
    <div className="App">
      <Aviso></Aviso>
      <NavBar></NavBar>
      <Titulo></Titulo>
      
    {vista === 'lista' &&  <ItemListContainer setVista={setVista}   />}
    
    {vista.includes("detalle")  && <ItemDetailConteiner detailId={detailId} />}
    </div>
  );
}

export default App;
