
import React from "react";
import style from './Paginate.module.css' 
import Loading from "../Loading/Loading";


function Paginado({ gamesPerPage, videogames, paginado }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(videogames / gamesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <div className={style.paginado}>
        {pageNumbers.length ? pageNumbers.map((number) => (
  <div key={number} className={style.number}>
    {/* le paso al paginado el numero de pagina */}
    <a className={style.link} href="#" onClick={() => paginado(number)}>
      {number}
    </a>
  </div>
)) : <Loading/>}
         
        </div>
      </nav>
    );
  }
  
  export default Paginado;