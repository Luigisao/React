import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const Item  = ( {info} ) => {




    
   
    return  (
        
        <div className='card-container'>
        <img src={info.imagen} className="img-card"></img>
        <div className='parte-arriba'>
        <p className='card-p'> Luigi Bosca</p>
        <h2 className='titulo-vino'>{info.nombre}</h2>
        </div>
        <div className='resto'>
        <p className='card-precio'>{info.precio}</p>
        <h3 className='p-botella'>precio por botella</h3>
        <h3 className='p-p-botella'>{info.precioBotella}</h3>
        <Link to={`/detail/${info.id}`}> <button className="btnvista">Comprar</button></Link>
        </div>
        
        </div>
        
        )
}

export default Item;