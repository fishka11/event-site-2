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
  sitePages,
  eventName,
  eventLocation,
  eventDate,
  polishMonths,
  organizersList as organizers,
  introText,
  picturesStrap,
  speakers,
  agenda,
  sponsors,
} from "../constans/Const";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faAt,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import Sponsors from "../pages/Sponsors";

library.add(faMapMarkerAlt, faAt, faPhone, faFax);

class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      sites: sitePages,
      eventName,
      eventDate,
      eventLocation,
      polishMonths,
      organizers,
      introText,
      picturesStrap,
      eventSpeakers: [],
      agenda,
      sponsors,
      sponsorKinds: [],
      sponsorsByKinds: [],
    };

    this.fetchEventSpeakers = this.fetchEventSpeakers.bind(this);
    this.setEventSpeakers = this.setEventSpeakers.bind(this);
    this.setPageHead = this.setPageHead.bind(this);
    this.setSponsorKinds = this.setSponsorKinds.bind(this);
    this.setSponsorsByKinds = this.setSponsorsByKinds.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchEventSpeakers(eventName);
    this.setSponsorKinds(sponsors);
    this.setSponsorsByKinds(sponsors);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchEventSpeakers(eventName) {
    const filteredSpeakers = speakers.filter((item) =>
      item.events
        .filter((item) => Object.keys(item).toString() === eventName.toString())
        .find((item) => item[eventName].presence === true)
    );
    if (this._isMounted) {
      this.setEventSpeakers(filteredSpeakers);
    }
  }

  setEventSpeakers(filteredSpeakers) {
    this.setState({ eventSpeakers: filteredSpeakers });
  }

  setPageHead(sites, destinationPath) {
    const pageMeta = sites.filter((item) => item.path === destinationPath)[0];
    return pageMeta;
  }

  setSponsorKinds(sponsors) {
    const sponsorKinds = [];
    sponsors.forEach((item) => {
      if (!sponsorKinds.some((el) => el.kind === item["kind"])) {
        sponsorKinds.push({ kind: item["kind"], count: 1 });
      } else {
        sponsorKinds.find((el) => el.kind === item["kind"]).count += 1;
      }
    });
    this.setState({ sponsorKinds: sponsorKinds });
  }

  setSponsorsByKinds(sponsors) {
    const sponsorsByKinds = [];
    sponsors.forEach((item) => {
      if (!sponsorsByKinds.some((el) => el.kind === item["kind"])) {
        sponsorsByKinds.push({ kind: item["kind"], sponsors: [] });
      }
    });
    sponsors.forEach((item) => {
      let kind = item.kind;
      sponsorsByKinds.find((item) => item.kind === kind).sponsors.push(item);
    });
    this.setState({ sponsorsByKinds: sponsorsByKinds });
  }

  render() {
    const {
      sites,
      eventDate,
      eventLocation,
      polishMonths,
      organizers,
      introText,
      picturesStrap,
      eventSpeakers,
      agenda,
      sponsors,
      sponsorKinds,
      sponsorsByKinds,
    } = this.state;

    const mainOrganizer = organizers.find((item) => item.mainOrganizer);

    return (
      <div className="App">
        <Router>
          <Navigation menuItems={sites} />
          <Switch>
            {/* Another way is to pass render prop instaed of component prop for better performance, beacouse Home is functional component */}
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  meta={this.setPageHead(sites, "")}
                  date={eventDate}
                  location={eventLocation}
                  months={polishMonths}
                  organizers={organizers}
                  introText={introText}
                  pictures={picturesStrap}
                />
              )}
            />
            <Route
              path="/tematyka"
              exact
              component={() => (
                <Agenda
                  meta={this.setPageHead(sites, "tematyka")}
                  agenda={agenda}
                />
              )}
            />
            <Route
              path="/prelegenci"
              exact
              component={() => (
                <Speakers
                  meta={this.setPageHead(sites, "prelegenci")}
                  eventSpeakers={eventSpeakers}
                />
              )}
            />
            <Route path="/atrakcje" />
            <Route
              path="/patronat"
              exact
              component={() => (
                <Sponsors
                  meta={this.setPageHead(sites, "patronat")}
                  sponsorsByKinds={sponsorsByKinds}
                />
              )}
            />
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
