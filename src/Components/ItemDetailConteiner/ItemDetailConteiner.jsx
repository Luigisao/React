import  {useState , useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailConteiner.css'



 const ItemDetailConteiner = ( {detailId}) =>{







    const Vinos = [{
        id: 0,
        nombre: "Malbec",
        precio: 28500,
        precioBotella: 4750,
        imagen:"https://luigiboscaar.vteximg.com.br/arquivos/ids/156647-370-370/LB_Malbec.png?v=637538599375130000",
        initial:1,
        stock:15,
        descripcion: "Vino hecho con finas hierbas, omelete du fomagge, mesclado no se mescla con jugo tang por favor te lo pido",
        comprar: "Add to cart"
     },{
        id: 1,
        nombre: "Cabernet-Sauvignon",
        precio: 26000,
        precioBotella: 4333,
        imagen:"https://luigiboscaar.vteximg.com.br/arquivos/ids/157139-370-370/Generico_LB_CabernetSauvignon_1_.png?v=637903032618700000",
        initial:1,
        stock:28,
        descripcion: "Vino hecho con finas hierbas, omelete du fomagge, mesclado no se mescla con jugo tang por favor te lo pido",
        comprar: "Add to cart"
     },{
        id: 2,
        nombre: "Cabernet-Framc",
        precio: 24600,
        precioBotella: 4100,
        imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/157144-370-370/DS_CABERNETFRANC_GENERAL_1_.png?v=637903118791830000",
        initial:1,
        stock:35,
        descripcion: "Vino hecho con finas hierbas, omelete du fomagge, mesclado no se mescla con jugo tang por favor te lo pido",
        comprar: "Add to cart"
     },{
        id: 3,
        nombre: "DeSangre-RedBlend",
        precio: 25000,
        precioBotella: 4166,
        imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/157103-370-370/DS_DOC_2020_1_General.png?v=637902020220870000",
        initial:1,
        stock:5,
        descripcion: "Vino hecho con finas hierbas, omelete du fomagge, mesclado no se mescla con jugo tang por favor te lo pido",
        comprar: "Add to cart"
     },{
        id: 4,
        nombre: "Selleccion de la Casa",
        precio: 22000,
        precioBotella: 5500,
        imagen: "https://luigiboscaar.vteximg.com.br/arquivos/ids/156989-370-370/_Cajax4_.png?v=637859145334700000",
        initial: 1,
        stock:20,
        descripcion: "Vino hecho con finas hierbas, omelete du fomagge, mesclado no se mescla con jugo tang por favor te lo pido",
        comprar: "Add to cart"
     },
     
     ];




        const [data, setData]= useState({});
    
        useEffect(()=>{
            const getData = new Promise((resolve, reject) => {
    
                setTimeout(()=>{ 
                    
                resolve(Vinos.find((vino)=>vino.id == detailId)) ;
                    
                },2000);
            })
            getData.then(res=> setData(res))
            
        },[])
        

        return( <ItemDetail data={data} ></ItemDetail>
           )
    
    
    
    
    
    



 }



 export default ItemDetailConteiner; 