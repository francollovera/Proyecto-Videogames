import CardContainer from "../CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getnamesbyGenre, orderByRating, orderByName, orderByOrigin } from "../../redux/actions";
import style from './Home.module.css';
import { useState } from "react";
import GenreSelect from '../GenreSelect/GenreSelect';
import Paginado from "../Paginate/Paginate";



// Cuando el componente se Home se monta se dispara useEffect y hace el dispatch, eso hace que se ejecute por supuesto el action creator de redux, el thunk la agarra, la ejectua hace el dispatch va a el reducer y crea u nestado nuevo con la modificacion.


const Home = () => {
  const dispatch = useDispatch(); 
  //actualizamos el estado con useDispatch;

  const videogames = useSelector((state) => state.videogames);
  console.log(videogames)
  const [orden, setOrden] = useState('')
  const [currentePage, setCurrentPage] = useState(1); 
  //mi pagina actual
  const [gamesPerPage, setGamesPerPage] = useState(15);
  //juegos por pagina
  const indexofLastCard = currentePage * 15
   //=15 //indice del ultimo personaje
  const indexofFirstCard = indexofLastCard - gamesPerPage;  //15-15=0 indice del primer personaje
  const currentCards = videogames.slice(indexofFirstCard, indexofLastCard); 
  //los personajes que estan en la pagina actual y le hago un 'corte' y toma una porcion dependiendo lo que yo le paso por pasarametro, en este caso el indice de la ultima card y el inidice del ultimo personaje.

  const paginado = (pageNumber) => {

    //me pasan un numero de pagina y seteo mi pagina en ese numero de paguna

    setCurrentPage(pageNumber)
  }

  useEffect(() => {

    //llamo funcion get
    dispatch(getVideogames());
  }, [dispatch]);

// -------------------FUNCIONESDEFILTROS-----------------------------------------------

  const handleChange = (e) => {
    dispatch(getnamesbyGenre(e.target.value))
  };

  function handleSort(e) {
    // e.preventDefault();
    dispatch(orderByName(e.target.value))
    //  quiero que sea pagina 1.
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
{/* --------------------------------FILTROS-------------------------------------------------- */}

        <div onChange={handleChange}>
          <GenreSelect></GenreSelect>

        </div>

        <select className={style.orden} onChange={e => handleSort(e)}>
          <option value="">Order by Name</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>

        </select>

        <select className={style.orden} onChange={e => handleS(e)}>
          <option value="">Order by Rating</option>
          <option value="asd">Menor</option>
          <option value="desc">Mayor</option>
          <br></br>
        </select>

        <select className={style.orden} onChange={(e) => dispatch(orderByOrigin(e.target.value))} >
          {["Select Option Origin", "Api", "Local"].map((e, i) => (
            //aqui la e es el elemento en cada mapeo
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>



        {/* ahi no quiero que me haga el map de el current character, no de todos los videogames */}
        <CardContainer videogames={currentCards} />

        <Paginado gamesPerPage={gamesPerPage}
          videogames={videogames.length}
          paginado={paginado} />

      </>
    </div>
  );
};

export default Home;







