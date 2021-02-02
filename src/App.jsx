import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AllCharacters from './avatar/AllCharacters'
import Details from './components/details/Details'
import Home from './components/home/Home'

export default function App() {
  return (
    <>
      <Router>
        <h1>Hello World!</h1>
        <AllCharacters />
        <Switch>
          <Route path="/" 
          exact 
          render={(routerProps) => <Home {...routerProps} />}
          />
            <Route path="/details" 
          exact 
          render={(routerProps) => <Details {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}

