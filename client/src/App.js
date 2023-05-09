import {Home, Form, Landing } from './view';
import Detail from './view/Detail/Detail';

import { useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './view/Components/NavBar/NavBar';
import Style from './App.module.css'

function App() {
  const location = useLocation();
  return (
    
    <div className={Style.container}>
      
      {location.pathname !== '/' && <NavBar />}
      
      <Route exact path = "/">
      <Landing />
      </Route>

      <Route path= "/home">
      <Home />
      </Route>

      <Route path= "/videogames/:id">
      <Detail />
      </Route>
      
      <Route path= "/create">
      <Form />
      </Route>
      
      
      
    </div>
  );
}

export default App;
