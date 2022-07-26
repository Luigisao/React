import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ( {initial, stock, onAdd} ) => {


    const [count, setCount] = useState(initial)

    const add= () =>{
        if(count < stock){
            const aux = count+1;
            setCount(aux)
        }
    }

    const remove= () =>{
        if(count > initial){
            const aux = count-1;
            setCount(aux)
        }
    }

    const Add= ( onAdd ) => {
        
        console.log(`Felicitaciones, Compraste ${onAdd} unidades`)
     }
    


    return(
        <div className='add-container'>
        <button onClick={remove} className='remove-to-cart'>-</button>
        <p className='stock'>{count}</p>
        <button onClick={add} className='Add-to-cart'>+</button>
        <button className='botonazo' onClick={()=>Add(count)}>Comprar</button>
        </div>
    )
}



export default ItemCount;