import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) =>{

  const [alCarrito, setAlCarrito] = useState(false)


   const onAdd = (quantity) => {
      setAlCarrito(true)
       }



return(
    <div className="contenedorao">
            <div className='img-container'>
                 <img src={data.imagen}></img>
            </div>
            <div className='resto-container'>
               <h4 className='onechange'>{data.nombre}</h4>
               <h4 className='desc'>{data.descripcion}</h4>
               <h4 className='change'>Precio Final ${data.precio}</h4>
               <h4 className='change'>Precio por Botella ${data.precioBotella}</h4>
               {
              alCarrito
               ? <Link to ='/cart' type="button" className="btn">Finalizar Compra</Link>
               : <ItemCount initial={1} stock={10} onAdd={onAdd} />
            }
            </div>
            </div>)


}


export default ItemDetail; 