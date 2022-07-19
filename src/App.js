
import './App.css';
import Aviso from './Components/aviso/aviso'
import Conteiner from './Components/contenedor/conteiner';
import NavBar from './Components/nav/navBar';

function App() {
  return (
    <div className="App">
      <Aviso></Aviso>
      <NavBar></NavBar>
      <Conteiner></Conteiner>
    </div>
  );
}

export default App;
