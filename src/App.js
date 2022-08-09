
import './App.css';
import Aviso from './Components/Aviso/Aviso'
import NavBar from './Components/navBar/navBar';
import Titulo from './Components/Titulo/Title';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './Components/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';


function App() {



  return (
    <BrowserRouter>
    <div className="App">

      <Aviso></Aviso>
      <NavBar></NavBar>
      <Titulo></Titulo>
      <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
    <Route path='/detail/:detailId' element={<ItemDetailConteiner/>}/>



      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;


/*


   <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/formato/:formatoId' element={<ItemListContainer/>}/>
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
  </BrowserRouter>



*/