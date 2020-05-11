import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../pages/Home";
import Agenda from "../pages/Agenda";
import Speakers from "../pages/Speakers";
import Admin from "../pages/Admin";
import GenericNotFound from "../pages/GenericNotFound";

import {
  menuItems,
  eventLocation,
  eventDate,
  polishMonths,
} from "../constans/Const";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: menuItems, eventDate, eventLocation, polishMonths };
  }
  render() {
    const { menu, eventDate, eventLocation, polishMonths } = this.state;

    return (
      <div className="App">
        <Router>
          <Navigation menuItems={menu} />
          <Switch>
            {/* Another way is to pass render prop instaed of component prop for better performance, beacouse Home is functional component */}
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  date={eventDate}
                  location={eventLocation}
                  months={polishMonths}
                />
              )}
            />
            <Route path="/tematyka" exact component={Agenda} />
            <Route path="/prelegenci" exact component={Speakers} />
            <Route path="/atrakcje" />
            <Route path="/patronat" />
            <Route path="/info" />
            <Route path="/kontakt" />
            <Route path="/rejestracja" />
            <Route path="/admin" exact component={Admin} />
            <Route path="/404" component={GenericNotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
