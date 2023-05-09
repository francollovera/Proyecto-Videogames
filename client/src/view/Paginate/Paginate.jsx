
import React from "react";
import style from './Paginate.module.css' 


function Paginado({ gamesPerPage, videogames, paginado }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(videogames / gamesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <div className={style.paginado}>
          {pageNumbers.map((number) => (
            <div key={number} className={style.number}>
              <a className={style.link} href="#" onClick={() => paginado(number)}>{number}</a>
            </div>
          ))}
        </div>
      </nav>
    );
  }
  
  export default Paginado;