import Item from '../Item/Item';
import './ItemList.css'






const ItemList = ({data = [], setVista}, ) =>{
    return (

        <div className='div-container'>
        {data.map(Vinos=><Item key={Vinos.id} info={Vinos} setVista={setVista}/>)}
        </div>
    )
}

 export default ItemList