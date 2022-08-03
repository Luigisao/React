import React,{useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"

const Vinos = [{
    id: 0,
    nombre: "Malbec",
    precio: 28500,
    precioBotella: 4750,
    imagen:"https://luigiboscaar.vteximg.com.br/arquivos/ids/156647-370-370/LB_Malbec.png?v=637538599375130000",
    initial:1,
    stock:15
 },{
    id: 1,
    nombre: "Cabernet-Sauvignon",
    precio: 26000,
    precioBotella: 4333,
    imagen:"https://luigiboscaar.vteximg.com.br/arquivos/ids/157139-370-370/Generico_LB_CabernetSauvignon_1_.png?v=637903032618700000",
    initial:1,
    stock:28
 },{
    id: 2,
    nombre: "Cabernet-Framc",
    precio: 24600,
    precioBotella: 4100,
    imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/157144-370-370/DS_CABERNETFRANC_GENERAL_1_.png?v=637903118791830000",
    initial:1,
    stock:35
 },{
    id: 3,
    nombre: "DeSangre-RedBlend",
    precio: 25000,
    precioBotella: 4166,
    imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/157103-370-370/DS_DOC_2020_1_General.png?v=637902020220870000",
    initial:1,
    stock:5
 },{
    id: 4,
    nombre: "Selleccion de la Casa",
    precio: 22000,
    precioBotella: 5500,
    imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/156989-370-370/_Cajax4_.png?v=637859145334700000",
    initial: 1,
    stock:20
 },
 
 ];





const ItemListContainer = ( {setVista} ) =>{

    const [data, setData]= useState([]);

    useEffect(()=>{
        const getData = new Promise((resolve, reject) => {

            setTimeout(()=>{ 

            resolve(Vinos) ;

            },2000);
        })
        getData.then(res=> setData(res))
        
    },[])

    return( <div className="contenedor">
    <ItemList data={data} setVista={setVista}/> 
    </div>
       )



}



export default ItemListContainer;;