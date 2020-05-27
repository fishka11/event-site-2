import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
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
  organizersList as organizers,
  introText,
  picturesStrap,
} from "../constans/Const";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faAt,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarkerAlt, faAt, faPhone, faFax);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: menuItems,
      eventDate,
      eventLocation,
      polishMonths,
      organizers,
      introText,
      picturesStrap,
    };
  }
  render() {
    const {
      menu,
      eventDate,
      eventLocation,
      polishMonths,
      organizers,
      introText,
      picturesStrap,
    } = this.state;

    const mainOrganizer = organizers.find((item) => item.mainOrganizer);

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
                  organizers={organizers}
                  introText={introText}
                  pictures={picturesStrap}
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
        <Footer mainOrganizer={mainOrganizer} />
      </div>
    );
  }
}
export default App;
