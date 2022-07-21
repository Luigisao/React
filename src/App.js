
import './App.css';
import Aviso from './Components/aviso/aviso'
import Conteiner from './Components/contenedor/conteiner';
import ItemListContainer from './Components/itemListConteiner/ItemListContainer';
import NavBar from './Components/nav/navBar';
function App() {
  return (
    <div className="App">
      <Aviso></Aviso>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <Conteiner>
      </Conteiner>


    </div>
  );
}

export default App;
