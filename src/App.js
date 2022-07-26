
import './App.css';
import Aviso from './Components/Aviso/Aviso'
import Conteiner from './Components/Conteiner/Conteiner';
import NavBar from './Components/navBar/navBar';




function App() {
  return (
    <div className="App">
      <Aviso></Aviso>
      <NavBar></NavBar>
      <Conteiner>
      </Conteiner>


    </div>
  );
}

export default App;
