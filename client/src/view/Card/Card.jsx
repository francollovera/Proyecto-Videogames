import style from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";


 
const Card = ({game}) =>{
    //recibe props muestra props, es un componente presentacional unicamente

    

    return(  
        <div className={style.container}>
        <Link to={`/videogames/${game.id}`} className={style.link}><p>{game.name}</p></Link>
        
        <img className={style.image} src={game.image} alt='lala'/> 
        <p>{'Genres: '}{game.genres}</p>
        
 
    </div>
    )
    }
    
    export default Card;





