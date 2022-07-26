import Cards from '../Cards/Cards';
import './Conteiner.css'
import Titulo from '../Titulo/Title';


function Conteiner (){
    return  (
    <div className='div-conteiner'> 
    <Titulo></Titulo>
    <div className='cards-container'>
    <Cards titulo='Malbec' precio='$28500' precioBotella='$4.750' imagen='Malbec' ></Cards>
    <Cards titulo='Cabernet-Sauvignon' precio='$26.000' precioBotella='$4.333' imagen='Cabernet'></Cards>
    <Cards titulo='Cabernet-Framc' precio='$24.600' precioBotella='$4.100' imagen='CabernetFranc'></Cards>
    <Cards titulo='De Sangre-Red Blend' precio='$26.000' precioBotella='$4.166' imagen='DeSangreRedBlend'></Cards>
    <Cards titulo='Seleccion de la Casa' precio='$22.000' precioBotella='$5.500' imagen='Seleccion'></Cards>
    </div>
    </div>);
}


export default Conteiner;