
import './App.css';
import Aviso from './Components/Aviso/Aviso'
import NavBar from './Components/NavBar/Navbar';
import Titulo from './Components/Titulo/Title';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './Components/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Cart from './Components/cart/cart';
import CartContextProvider from './Components/CartContext/CartContext';

function App() {



  return (
    <CartContextProvider>
    <BrowserRouter>
    <div className="App">

      <Aviso></Aviso>
      <NavBar></NavBar>
      <Titulo></Titulo>
      <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
    <Route path='/detail/:detailId' element={<ItemDetailConteiner/>}/>
    <Route path='/cart' element={<Cart />}></Route>


    </Routes>
    </div>
  </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;

