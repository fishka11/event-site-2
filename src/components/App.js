import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CookieConsent from "react-cookie-consent";

import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../pages/Home";
import Agenda from "../pages/Agenda";
import Speakers from "../pages/Speakers";
import Info from "../pages/Info";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import GenericNotFound from "../pages/GenericNotFound";

import { polishMonths, currentEvent } from "../data/Const";
import eventsList from "../data/EventsData";
import { speakers } from "../data/Speakers";
import { eventSponsorsByKind, sponsors } from "../data/Sponsors";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faAt,
  faPhone,
  faFax,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Sponsors from "../pages/Sponsors";

library.add(faMapMarkerAlt, faAt, faPhone, faFax, faGlobe);

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      currentEvent,
      eventsList,
      polishMonths,
      eventSpeakers: [],
      sponsors,
      eventSponsorsByKind,
    };

    this.fetchEventSpeakers = this.fetchEventSpeakers.bind(this);
    this.setEventSpeakers = this.setEventSpeakers.bind(this);
    this.setPageHead = this.setPageHead.bind(this);
    this.fetchEventSponsorsByKind = this.fetchEventSponsorsByKind.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchEventSpeakers(currentEvent);
    this.fetchEventSponsorsByKind(sponsors, currentEvent);
  }

  componentDidUpdate(prevProps) {
    if (this.state.eventData !== prevProps.eventData) {
      this.fetchData(this.props.userID);
    }
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

  fetchEventSponsorsByKind(sponsors, eventName) {
    const filteredSponsers = sponsors.filter((item) =>
      item.events
        .filter((item) => Object.keys(item).toString() === eventName.toString())
        .find((item) => item[eventName].presence === true)
    );

    eventSponsorsByKind.forEach((item) => {
      let currentKind = item.kind;
      let currentGroup = filteredSponsers.filter((item) =>
        item.events
          .filter(
            (item) => Object.keys(item).toString() === eventName.toString()
          )
          .find(
            (item) =>
              item[eventName].kind.toLowerCase() === currentKind.toLowerCase()
          )
      );
      item.sponsors = currentGroup;
    });

    if (this._isMounted) {
      this.setEventSponsorsByKind(eventSponsorsByKind);
    }
  }

  setEventSponsorsByKind(filteredSponsers) {
    this.setState({ eventSponsorsByKind: filteredSponsers });
  }

  render() {
    const {
      currentEvent,
      eventsList,
      polishMonths,
      eventSpeakers,
      eventSponsorsByKind,
    } = this.state;

    const event = eventsList.filter(
      (item) => item.eventName === currentEvent
    )[0];
    const organizers = event.organizersList;
    const mainOrganizer = organizers.filter((item) => item.mainOrganizer)
      ? organizers.filter((item) => item.mainOrganizer)[0]
      : null;
    const helperOrganizer = organizers.filter((item) => item.helperOrganizer)
      ? organizers.filter((item) => item.helperOrganizer)[0]
      : null;
    const sites = event.sitePages;
    return (
      <div className={currentEvent}>
        <Router>
          <Navigation menuItems={sites} currentEvent={currentEvent} />
          <Switch>
            {/* Another way is to pass render prop instaed of component prop for better performance, beacouse Home is functional component */}
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  meta={this.setPageHead(sites, "")}
                  event={event}
                  currentEvent={currentEvent}
                  months={polishMonths}
                />
              )}
            />
            <Route
              path="/tematyka"
              component={() => (
                <Agenda
                  meta={this.setPageHead(sites, "tematyka")}
                  agenda={event.agenda}
                />
              )}
            />
            <Route
              path="/prelegenci"
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
              component={() => (
                <Sponsors
                  meta={this.setPageHead(sites, "patronat")}
                  sponsorsByKinds={eventSponsorsByKind}
                />
              )}
            />
            <Route
              path="/info"
              component={() => (
                <Info meta={this.setPageHead(sites, "info")} event={event} />
              )}
            />
            <Route
              path="/kontakt"
              component={() => (
                <Contact
                  meta={this.setPageHead(sites, "kontakt")}
                  event={event}
                />
              )}
            />
            <Route
              path="/rejestracja"
              component={() => (
                <Register
                  meta={this.setPageHead(sites, "rejestracja")}
                  currentEvent={currentEvent}
                />
              )}
            />
            <Route path="/admin" exact component={Admin} />
            <Route
              path="/404"
              component={() => (
                <GenericNotFound
                  meta={this.setPageHead(sites, "404")}
                  event={event}
                />
              )}
            />
            <Redirect to="/404" />
          </Switch>
        </Router>
        <Footer
          mainOrganizer={mainOrganizer}
          helperOrganizer={helperOrganizer}
        />
        <CookieConsent
          location="bottom"
          buttonText="OK, rozumiem"
          cookieName="cookiesBar"
          style={{ background: "#315ec6", color: "#ddd" }}
          buttonStyle={{
            color: "#ffffff",
            background: "#f46036",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
          expires={150}
        >
          Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w
          celach statystycznych, reklamowych oraz funkcjonalnych. Każdy może
          zaakceptować pliki cookies albo ma możliwość wyłączenia ich w
          przeglądarce.{" "}
          <a
            aria-label="dowiedz się więcej o ciasteczkach"
            role="button"
            rel="noopener noreferrer"
            tabindex="0"
            class="cc-link"
            href="http://wszystkoociasteczkach.pl/"
            target="_blank"
          >
            Dowiedz się więcej.
          </a>
        </CookieConsent>
      </div>
    );
  }
}
export default App;
