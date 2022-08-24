import  {useState , useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailConteiner.css'
import { useParams } from 'react-router-dom';
import {getFirestore, doc , getDoc} from 'firebase/firestore';




 export const ItemDetailConteiner = ( ) =>{



        const [data , setData]= useState({});
        const {detailId} = useParams()
    
        useEffect(()=>{
         const querydb= getFirestore();
         const queryDoc = doc(querydb,'products' , detailId)
         getDoc(queryDoc)
         .then(res=>setData({id: res.id, ...res.data()}))

        },[])
        

        return( <ItemDetail data={data} ></ItemDetail> )

 }



 export default ItemDetailConteiner; 