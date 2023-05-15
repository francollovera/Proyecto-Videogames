import style from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";


 
const Card = ({game}) =>{
    

    

    return(  
        <div className={style.container}>
        <Link to={`/videogames/${game.id}`} className={style.link}><p>{game.name}</p></Link>
        
        <img className={style.image} src={game.image} alt={game.image}/> 
        <p className={style.genres}>{'Genres: '}{game.genres}</p>
        
 
    </div>
    )
    }
    
    export default Card;





