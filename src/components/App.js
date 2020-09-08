/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CookieConsent from 'react-cookie-consent';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapMarkerAlt,
  faAt,
  faPhone,
  faFax,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from '../pages/Home';
import Agenda from '../pages/Agenda';
import Speakers from '../pages/Speakers';
import Info from '../pages/Info';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Admin from '../pages/Admin';
import GenericNotFound from '../pages/GenericNotFound';

import {
  POLISH_MONTHS,
  CURRENT_EVENT,
  PATRONS_ROLE_PRIORITY,
  GRAPHCMS_ENDPOINT,
} from '../data/Const';
import { GRAPHCMS_TOKEN } from '../data/Secret';

import './App.css';

import Sponsors from '../pages/Sponsors';

library.add(faMapMarkerAlt, faAt, faPhone, faFax, faGlobe);

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      eventData: null,
    };

    this.groupPatronsByKind = this.groupPatronsByKind.bind(this);
    this.setEventData = this.setEventData.bind(this);
    this.fetchEventData = this.fetchEventData.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchEventData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setEventData(results) {
    this.setState({ eventData: results });
  }

  groupPatronsByKind(data) {
    const newData = data;
    const goupedPatrons = [];
    data.patrons.forEach((item) => {
      const currentEventKey = `role${CURRENT_EVENT}`;
      if (!goupedPatrons.find((i) => i.name === item[currentEventKey])) {
        const patronsGroup = {};
        const related = PATRONS_ROLE_PRIORITY.find(
          (i) => i.name === item[currentEventKey]
        );
        patronsGroup.name = item[currentEventKey];
        patronsGroup.list = [item];
        patronsGroup.priority = related.priority;
        patronsGroup.header = related.polishName;
        goupedPatrons.push(patronsGroup);
      } else {
        goupedPatrons
          .find((i) => i.name === item[currentEventKey])
          .list.push(item);
      }
    });
    newData.patrons = [...goupedPatrons];
    if (this._isMounted) {
      this.setEventData(newData);
    }
  }

  async fetchEventData() {
    const response = await fetch(GRAPHCMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          conferees(where: {events_contains_some: KBN}) {
            firstName
            description
            lastName
            title
            photo {
              url
            }
            id
          }
          events(where: {eventName: KBN}) {
            agenda
            cite
            citeAuthor
            eventEndDate
            eventFullName
            eventName
            eventStartDate
            eventType
            genitiveEventType
            id
            locativeEventType
            singleRoomPrice
            doubleRoomPrice
            eventLocation {
              address
              city
              googleMapsCode
              id
              name
              postalCode
              webSite
            }
            eventSiteMenu {
              description
              displayName
              id
              title
              visibleInMenu
              path
            }
            organizers {
              address
              bankAccount
              bankName
              city
              eMail
              fax
              id
              name
              nip
              organizerType
              phone
              postalCode
              regon
              shortName
              webSite
              logo {
                id
                url
              }
            }
            picturesStrap {
              id
              url
            }
          }
          patrons(where: {events_contains_some: KBN}) {
            id
            name
            roleKBB
            roleKBN
            roleKOIN
            roleZPO
            logo {
              fileName
              height
              id
              mimeType
              size
              url
              width
            }
          }
          eventDiscounts {
            discount
            id
            name
          }
      }
      `,
      }),
    }).catch((error) => error);
    if (response instanceof Error) {
      console.log(`Błąd pobierania danych z serwera GraphCMS: ${response}`);
    } else {
      const { data } = await response.json();
      this.groupPatronsByKind(data);
    }
  }

  render() {
    const { eventData } = this.state;
    const eventSpeakers = (eventData && eventData.conferees) || [];
    const event =
      (eventData &&
        eventData.events &&
        eventData.events.find((i) => i.eventName === CURRENT_EVENT)) ||
      {};
    const organizers = (event && event.organizers) || [];
    const siteMenuItems = (event && event.eventSiteMenu) || [];
    const patrons = (eventData && eventData.patrons) || [];
    const discounts = (eventData && eventData.eventDiscounts) || [];

    return (
      <div className={CURRENT_EVENT.toLowerCase()}>
        <Router>
          <Navigation
            menuItems={siteMenuItems}
            currentEvent={CURRENT_EVENT}
            eventFullName={event.eventFullName}
          />
          <Switch>
            {/* Another way is to pass render prop instaed of component prop for better performance, beacouse Home is functional component */}
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  path="null"
                  event={event}
                  currentEvent={CURRENT_EVENT}
                  months={POLISH_MONTHS}
                />
              )}
            />
            <Route
              path="/tematyka"
              component={() => (
                <Agenda
                  path="tematyka"
                  eventSiteMenu={event.eventSiteMenu}
                  agenda={event.agenda}
                />
              )}
            />
            <Route
              path="/prelegenci"
              component={() => (
                <Speakers
                  path="prelegenci"
                  eventSiteMenu={event.eventSiteMenu}
                  eventSpeakers={eventSpeakers}
                />
              )}
            />
            <Route path="/atrakcje" />
            <Route
              path="/patronat"
              component={() => (
                <Sponsors
                  path="atrakcje"
                  eventSiteMenu={event.eventSiteMenu}
                  patrons={patrons}
                />
              )}
            />
            <Route
              path="/info"
              component={() => (
                <Info
                  path="info"
                  event={event}
                  eventSiteMenu={event.eventSiteMenu}
                  discounts={discounts}
                />
              )}
            />
            <Route
              path="/kontakt"
              component={() => (
                <Contact
                  path="kontakt"
                  eventSiteMenu={event.eventSiteMenu}
                  event={event}
                />
              )}
            />
            <Route
              path="/rejestracja"
              component={() => (
                <Register
                  path="rejestracja"
                  eventSiteMenu={event.eventSiteMenu}
                  currentEvent={CURRENT_EVENT}
                />
              )}
            />
            <Route path="/admin" exact component={Admin} />
            <Route
              path="/404"
              component={() => (
                <GenericNotFound
                  path="404"
                  eventSiteMenu={event.eventSiteMenu}
                  event={event}
                />
              )}
            />
            <Redirect to="/404" />
          </Switch>
        </Router>
        <Footer organizers={organizers} />
        <CookieConsent
          location="bottom"
          buttonText="OK, rozumiem"
          cookieName="cookiesBar"
          style={{ background: '#315ec6', color: '#ddd' }}
          buttonStyle={{
            color: '#ffffff',
            background: '#f46036',
            fontSize: '0.8rem',
            fontWeight: 'bold',
          }}
          expires={150}
        >
          Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w
          celach statystycznych, reklamowych oraz funkcjonalnych. Każdy może
          zaakceptować pliki cookies albo ma możliwość wyłączenia ich w
          przeglądarce.{' '}
          <a
            aria-label="dowiedz się więcej o ciasteczkach"
            role="button"
            rel="noopener noreferrer"
            tabIndex="0"
            className="cc-link"
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
