import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getVideogamesname } from "../../redux/actions";
import { useState } from "react";

import style from './Searchbar.module.css';


export default function SearchBar(props){
    const [value, setValue]= useState('');
    
    const dispatch = useDispatch();

    const videogames = useSelector((state) => state.videogames);
    const videogamesbyname = useSelector((state) => state.videogamesbyname);
    

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        dispatch(getVideogamesname(value))
        props.setCurrentPage();
    }
    const handleClick = () =>{
        dispatch(getVideogames());
        setValue('')
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSearch(e);
        }
      };



    return(  
        <div className={style.container}>
            {videogames !== videogamesbyname ? <button className={style.button} onClick={handleClick}>Borrar</button> : null }
            < input className={style.input} type="text" name="SearchVideogame" value={value} onChange={handleChange}
             
             onKeyDown={handleKeyDown}
             
               placeholder="Search Videogame "/>
            <button className={style.button} onClick={handleSearch}>Buscar</button>

        

</div>
        
  );
}





 