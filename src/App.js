import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import allRoutes from './routes/allRoutes'
import { Footer, Navigation, MobileNavigation } from './components/common/'

class App extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0,0);
    }
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  openMobileNavigation() {
    document.getElementById("MobileNavigation").style.height = "100%";
  }

  closeMobileNavigation() {
    document.getElementById("MobileNavigation").style.height = "0%";
    document.getElementById("MobileNavigation__services").style.height = "0px";
  }

  handleScroll() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("NavigationWrapper").style.padding = "14px 0px 14px 0px";
        document.getElementById("NavigationWrapper").style.background = "rgba(255,255,255,1)";
      } else {
        document.getElementById("NavigationWrapper").style.padding = "34px 0px 34px 0px";
        document.getElementById("NavigationWrapper").style.background = "none";
      }
  }

  render() {
    return (
      <div className="App">
        <Navigation open={this.openMobileNavigation} />
        <MobileNavigation close={this.closeMobileNavigation} />
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

export default withRouter(App);
