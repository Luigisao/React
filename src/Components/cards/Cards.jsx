import './Cards.css'
import ItemCount from '../ItemCount/ItemCount';

function Cards ( props ) {

   
    return  (
        <div className='card-container'>
        <img src={ require(`../img/${props.imagen}.png`)}className='img-card'/>
        <div className='parte-arriba'>
        <p className='card-p'> Luigi Bosca</p>
        <h2 className='titulo-vino'>{props.titulo}</h2>
        </div>
        <div className='resto'>
        <p className='card-precio'>{props.precio}</p>
        <h3 className='p-botella'>Precio por botella</h3>
        <h3 className='p-p-botella'>{props.precioBotella}</h3>
        </div>
        <ItemCount initial={1} stock={6} ></ItemCount>
        </div>
        )
}

export default Cards;