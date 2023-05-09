import CardContainer from "../CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getnamesbyGenre, orderByRating } from "../../redux/actions";

import { orderByName } from '../../redux/actions';

import style from './Home.module.css';
import { useState } from "react";
import  GenreSelect  from '../GenreSelect/GenreSelect';
import Paginado from "../Paginate/Paginate";


//el use efecct le dice que haga algo cuando se monta, por lo que lo importamos dos hooks, useffect y usedipatch que viene de react-redux.
// Cuando el componente se Home se monta se dispara useEffect y hace el dispatch, eso hace que se ejecute por supuesto el action creator de redux, el thunk la agarra, la ejectua hace el dispatch va a el reducer y crea u nestado nuevo con la modificacion.


const Home = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  console.log(videogames)
  const [orden, setOrden] = useState('')
  const[currentePage, setCurrentPage] = useState(1);
  const[gamesPerPage, setGamesPerPage] = useState(15);
  const indexofLastCard = currentePage*15 //15
  const indexofFirstCard = indexofLastCard - gamesPerPage;
  const currentCards = videogames.slice(indexofFirstCard,indexofLastCard);

  const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }
  
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  

  const handleChange = (e) => {
    dispatch(getnamesbyGenre(e.target.value))
  };


  function handleSort(e) {
    e.preventDefault();
   dispatch(orderByName(e.target.value))
   setCurrentPage(1)
   setOrden(`Ordenado ${e.target.value}`)
  }
  function handleS(e) {
    e.preventDefault();
   dispatch(orderByRating(e.target.value))
   setCurrentPage(1)
   setOrden(`Ordenado ${e.target.value}`)
  }



 
 

  return (
    <div className={style.container}>
      <>
       
        <div onChange={handleChange}>
          <GenreSelect></GenreSelect>
        
        </div>

        <select className={style.orden}  onChange={e => handleSort(e)}>
        <option value="">Alfabeticamente</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>

        </select>

        <select className={style.orden1} onChange={e => handleS(e)}>
        <option value="">Rating</option>
            <option value="asc">Menor</option>
            <option value="desc">Mayor</option>

        </select>
        

        <CardContainer videogames={currentCards} />
        
        <Paginado gamesPerPage={gamesPerPage}
        videogames={videogames.length}
        paginado={paginado} />
        
      </>
    </div>
  );
};

export default Home;







