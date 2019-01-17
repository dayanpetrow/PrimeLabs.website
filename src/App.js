import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import allRoutes from './routes/allRoutes'
import { Footer } from './components/common/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {
            allRoutes.map(route => (
              <Route
                key={route.path}
                exact={route.exact || true}
                path={route.path}
                component={route.page}
              />
            ))
          }
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
