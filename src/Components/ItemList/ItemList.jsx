import Item from '../Item/Item';
import './ItemList.css'






const ItemList = ({data}, ) =>{
    return (

        <div className='div-container'>
        {data.map(Vinos=><Item key={Vinos.id} info={Vinos} />)}
        </div>
    )
}

 export default ItemList