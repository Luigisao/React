import Cards from '../cards/cards';
import '../contenedor/conteiner.css'
import Titulo from '../Titulo/Title';


function Conteiner (){
    return  (
    <div className='div-conteiner'> 
    <Titulo></Titulo>
    <div className='cards-container'>
    <Cards titulo='Malbec' precio='$28500' precioBotella='$4.750' imagen='Malbec'></Cards>
    <Cards titulo='Cabernet-Sauvignon' precio='$26.000' precioBotella='$4.333' imagen='Cabernet'></Cards>
    <Cards titulo='Cabernet-Sauvignon' precio='$24.600' precioBotella='$4.100' imagen='CabernetFranc'></Cards>
    <Cards titulo='Cabernet-Sauvignon' precio='$26.000' precioBotella='$4.166' imagen='DeSangreRedBlend'></Cards>
    <Cards titulo='Cabernet-Sauvignon' precio='$30.000' precioBotella='$5.000' imagen='Seleccion'></Cards>
    </div>
    </div>);
}


export default Conteiner;