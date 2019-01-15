import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import allRoutes from './routes/allRoutes'

class App extends Component {
  render() {
    console.log(window.innerWidth, window.innerHeight);
    return (
      <div className="App">
        <Switch>
            {
              allRoutes.map(route => (
                <Route 
                  key={route.path}
                  exact={route.exact} 
                  path={route.path}
                  component={route.page} 
                />
              ))
            }
          </Switch>
      </div>
    );
  }
}

export default App;
