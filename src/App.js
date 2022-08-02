
import './App.css';
import Aviso from './Components/Aviso/Aviso'
import NavBar from './Components/navBar/navBar';
import Titulo from './Components/Titulo/Title';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {




  return (
    <div className="App">
      <Aviso></Aviso>
      <NavBar></NavBar>
      <Titulo></Titulo>
    <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
