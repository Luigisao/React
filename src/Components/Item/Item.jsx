import './Item.css'
import ItemCount from '../ItemCount/ItemCount';


const Item  = ( {info, setVista,data} ) => {




    
   
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
        <ItemCount initial={info.initial} stock={info.stock} > </ItemCount>
        <button className='btnvista' data={data} onClick={()=> setVista("detalle-" + info.id)}>Add to cart</button> 
        </div>
        
        </div>
        
        )
}

export default Item;