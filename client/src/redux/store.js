import rootReducer from './reducer';
//objeto que contiene todos los reducers
import { createStore, applyMiddleware} from "redux";
//apply middleware viene a ser como el async y permite la aplicacion de otros middlewares
import thunk from 'redux-thunk'; 
//viene a ser como un await, solo que retrasa el envio
import {composeWithDevTools} from 'redux-devtools-extension';



export const store = createStore(
    rootReducer, //combina varios reducer y devuelve un objeto con la combinaciion.   
    composeWithDevTools(applyMiddleware(thunk))
);

