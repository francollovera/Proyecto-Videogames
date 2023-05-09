import Card from '../Card/Card';
import style  from './CardContainer.module.css';
import Loading from '../Loading/Loading';


function CardContainer ({videogames}){

   
    

const Listagames = videogames;
console.log(Listagames)
 //este es el estado global que ve CardContainer esperando que en el estado global este el array de videogames. Osea useSeelctor va a buscar ese videogames a mi estado global
// CardContainer es un componente smart, ya que tiene una carga de logica, cards container recibe props de afuera.
return(  
<div className={style.container}>
  
    {Listagames?.map((game) => <Card game={game} />)}
  
   
  
</div>
);
}

export default CardContainer;