import Item from "../Item/Item";
import './ItemDetail.css'


const ItemDetail = ({ data }) =>{



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
            <button className='btn'>{data.comprar}</button>
            </div>
            </div>)


}


export default ItemDetail; 