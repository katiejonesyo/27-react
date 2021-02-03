import React from "react";
import Home from '../home/Home';
import Details from '../details/Details';
import { BrowserRouter as Router, 
  Route, Switch } 
  from 'react-router-dom';
import'./App.css';


export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="Home">
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <Home {...routerProps} />}
              />
              <Route
                path="/details/:_id"
                exact
                render={(routerProps) => <Details {...routerProps} />}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

