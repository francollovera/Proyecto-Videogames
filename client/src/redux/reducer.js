// redux me proporciona un estado global, y cualquier componente que lo necesite puede hacer uso de este estado global(es un objeto el estado global, un OBJETO) en cualquier parte de mi aplicacion, eso es lo que hace redux;
// Quiero que en mi estado global por supuesto este mi array de videogames.
//  el unico que puede cambiar el estado global es la funcion reducer o señor reducer.
// Para ello le envio una instruccion de que es lo que quiero que haga por medio de action que tiene un type y describa lo que haga, y el payload es la informacion adicional que enviamos al reducer por la que quiero cambiar la que se encuentra en el estado global. El reducer no interactua con la base de datos ni con la Api, no nos interesa!
//rootreducer es una funcion que va a cambiar el estado, recibiendo action y payload, y por supuesto cuando inicia tengo que darle un estado, por ello es initialState. Para conectar mi app con redux tengo que agregar el provider que esta en index js que debo utilizar abranzando todo, pasandole la prop que indica cual es el store, para eso me importo el import de redux creado. El compose hace que ando thunkmiddleware y ese es el que va a poder usar las req. Como redux solo no puede hacer funciones asincronas en el axion retorno una funcion que se encarga de hacer la request.
// Por supuesto para que actions llegue a useReducer, hace un dispath. Reducer recibe la data de actions y trabaja con ella.


import { GET_VIDEOGAMES, ORDER_BY_RATING } from './actions';
import { POST_VIDEOGAMES } from './actions';
import { GET_DETAIL } from './actions';
import { GET_VIDEOGAMESNAME } from './actions';
import { GET_GENRES } from './actions';
import {GET_NAMES_BY_GENRE} from './actions';
import { ORDER_BY_NAME } from './actions';
import { ORDER_BY_ORIGIN } from './actions';
import { RESET_VIDEOGAMES } from './actions';



const initialState ={ //al arrancar tiene un array vacio y este es mi estado global al principio
    numPage : 1,
    videogames:[],
    allvideogames :[],
    todosvideogames:[],
    detail:[],
    videogamesbyname:[],
    genres: [],
    filtrado: [],
    filtered: [],
    order: 'asc',
    orderd: 'asd',
    originalVideogames: [],
};
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_VIDEOGAMES:
  return {
    ...state,
    videogames: action.payload,
    allvideogames: action.payload,
    todosvideogames: action.payload,
    originalVideogames: action.payload
  };
   //esto si ahora impacta el estado global, y el estado que la estaba mirando es cardcontainer.
            
      

        case POST_VIDEOGAMES:
            return {...state, videogames: action.payload};

            case GET_DETAIL:
                
                 return {...state, detail: action.payload};

                 case GET_VIDEOGAMESNAME:
                
                 return {...state, videogames: action.payload};

                 case GET_GENRES:
                    return { ...state, genres: action.payload }
                 ;

                 //home le pasa ese action.payload
                 case GET_NAMES_BY_GENRE: { 
                    let value = action.payload;
                    value === 'All' ? value= state.allvideogames :
                    value = state.allvideogames.filter((game)=>{
                       return game.genres.includes(action.payload)
                    })
                    return {
                        ...state, videogames: value
                    }
                    };
                  
                    case ORDER_BY_NAME:
                    let sortedArr = action.payload === 'asc' ?
                    state.todosvideogames.sort(function(a,b){

                        //metodo sort: ordena los elementos de forma ascendente o descendiente conun criterio especifico
                        //ORDEN Z-A

                        if(a.name > b.name){
                            return 1; // si este numero es positivo, b.name deberia estar primero
                        }
                        if(b.name > a.name){
                            return -1;
                        }
                        return 0;
                    }) :

                    //ORDEN A-Z
                    state.todosvideogames.sort(function(a,b ){
                        if(a.name > b.name){
                            return -1;
                        }
                        if(b.name > a.name){
                            return 1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        todosvideogames :sortedArr
                    }
                    case ORDER_BY_RATING:
                        let sArr = action.payload === 'asd' ?
                        state.allvideogames.sort(function(a,b){
                            if(a.rating > b.rating){
                                return 1;
                            }
                            if(b.rating > a.rating){
                                return -1;
                            }
                            return 0;
                        }) :
                        state.allvideogames.sort(function(a,b ){
                            if(a.rating > b.rating){
                                return -1;
                            }
                            if(b.rating > a.rating){
                                return 1;
                            }
                            return 0;
                        })
                        return {
                            ...state,
                            allvideogames :sArr
                        }
                        case ORDER_BY_ORIGIN: {
                            const {allvideogames} = state;
                            let response;
                            const juegogamesdb = allvideogames.filter(videogame => typeof videogame.id === 'string')
                            const gamesapi = allvideogames.filter(videogame => typeof videogame.id === 'number')
                            if(action.payload == 'Api') response = gamesapi;
                            if(action.payload == 'Local') response = juegogamesdb;
                            if(action.payload == 'Select Option Origin') response = allvideogames;

                            return{
                                ...state,
                                videogames: response 
                            }
                        }
                        case RESET_VIDEOGAMES:
      return {
        ...state,
        videogames: state.originalVideogames,
        allvideogames: state.originalVideogames,
        todosvideogames: state.originalVideogames
      };
     
                      default:
                        return{...state}
                    }
   
    };
    


export default rootReducer;