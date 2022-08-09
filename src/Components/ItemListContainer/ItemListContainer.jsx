import React,{useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"

const Vinos = [{
    id: 0,
    nombre: "Malbec",
    precio: 28500,
    precioBotella: 4750,
    imagen:"https://luigiboscaar.vteximg.com.br/arquivos/ids/156647-370-370/LB_Malbec.png?v=637538599375130000",
    initial:1,
    stock:15,
    categoria: 'vinoespumante'
 },{
    id: 1,
    nombre: "Cabernet-Sauvignon",
    precio: 26000,
    precioBotella: 4333,
    imagen:"https://luigiboscaar.vteximg.com.br/arquivos/ids/157139-370-370/Generico_LB_CabernetSauvignon_1_.png?v=637903032618700000",
    initial:1,
    stock:28,
    categoria: 'vinoespumante'

 },{
    id: 2,
    nombre: "Cabernet-Framc",
    precio: 24600,
    precioBotella: 4100,
    imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/157144-370-370/DS_CABERNETFRANC_GENERAL_1_.png?v=637903118791830000",
    initial:1,
    stock:35,
    categoria:'vinotinto'
 },{
    id: 3,
    nombre: "DeSangre-RedBlend",
    precio: 25000,
    precioBotella: 4166,
    imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/157103-370-370/DS_DOC_2020_1_General.png?v=637902020220870000",
    initial:1,
    stock:5,
    categoria:'vinotinto'
 },{
    id: 4,
    nombre: "Selleccion de la Casa",
    precio: 22000,
    precioBotella: 5500,
    imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/156989-370-370/_Cajax4_.png?v=637859145334700000",
    initial: 1,
    stock:20,
    categoria:'vinotinto'
 },{
   id: 5,
   nombre: "Malbec-Aniversario",
   precio: 28500,
   precioBotella: 4750,
   imagen:"https://luigiboscaar.vteximg.com.br/arquivos/ids/156952-370-370/120a%C3%B1os_3000.png?v=637819316611670000",
   initial:1,
   stock:15,
   categoria: 'vinoespumante'
},{
   id: 6,
   nombre: "Malbec-Organico",
   precio: 26000,
   precioBotella: 4333,
   imagen:"https://luigiboscaar.vteximg.com.br/arquivos/ids/157015-370-370/MALBEC-ORGANICO1.png?v=637880026874600000",
   initial:1,
   stock:28,
   categoria: 'vinoespumante'

},{
   id: 7,
   nombre: "Pinot - Noir",
   precio: 24600,
   precioBotella: 4100,
   imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/157165-370-370/LB-PN.png?v=637907517366530000",
   initial:1,
   stock:35,
   categoria:'vinotinto'
},{
   id: 8,
   nombre: "La Linda Malbec",
   precio: 25000,
   precioBotella: 4166,
   imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/157163-370-370/LL_Malbec-18.png?v=637907514576800000",
   initial:1,
   stock:5,
   categoria:'vinotinto'
},{
   id: 9,
   nombre: "Selleccion Fiesta",
   precio: 20000,
   precioBotella: 5000,
   imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/156932-370-370/LUIGI-BOSCA-%C2%B7-celebracio%CC%81n_transparente.png?v=637805387543330000",
   initial: 1,
   stock:20,
   categoria:'vinotinto'
},
 ];





const ItemListContainer = ( ) =>{

    const [data, setData]= useState([]);

    const { categoriaId } = useParams()

    useEffect(()=>{
        const getData = new Promise((resolve, reject) => {

            setTimeout(()=>{ 

            resolve(Vinos) ;

            },2000);
        });
        if( categoriaId ){
         getData.then(res=>setData(res.filter(Vinos=>Vinos.categoria === categoriaId)))
       } else {
         getData.then(res=>setData(res));
       }
       
    },[categoriaId])

    return( <div className="contenedor">
    <ItemList data={data} /> 
    </div>
       )



}



export default ItemListContainer;;