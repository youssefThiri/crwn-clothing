import React from 'react' ;
import { Switch , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components.jsx';


const HatePage = () => (
    <div>
      <h1>
        welcome to my hats page    
      </h1>
    </div>
  );




function App () {
  return (
    <div>
  <Switch>
      <Route exact path = '/' component = {HomePage } /> 
      <Route path = '/hats' component= { HatePage } />   
  </Switch>
       
    </div>
  );
}

export default App;
