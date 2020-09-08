import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import Counter from '../components/Counter';
import KOINIntro from '../components/KOINIntro';
import KBNIntro from '../components/KBNIntro';
import Independence from '../components/Indepenence';
import Organizers from '../components/Organizers';
import Meta from '../components/Meta';

import './Home.css';

const Home = ({ event, months, currentEvent, path }) => {
  const eventFullName =
    (event && event.eventFullName && event.eventFullName) || '';
  const multilineTitle = eventFullName.split('\n');
  const eventLocation = (event && event.eventLocation) || {};
  const eventStartDate =
    (event && new Date(event.eventStartDate)) || new Date();
  const eventEndDate = (event && new Date(event.eventEndDate)) || new Date();
  const pictures = (event && event.picturesStrap) || [];
  const organizers = (event && event.organizers) || [];
  const eventSiteMenu = (event && event.eventSiteMenu) || [];

  const eventSwitch = () => {
    switch (currentEvent) {
      case 'KOIN':
        return <KOINIntro pictures={pictures} />;
      case 'KBN':
        return <KBNIntro pictures={pictures} />;
      default:
        return null;
    }
  };

  return (
    <div className="home">
      <Meta eventSiteMenu={eventSiteMenu} path={path} />
      <section className="top">
        <Jumbotron fluid>
          <Container>
            <div className="what-where-when">
              {event.cite ? (
                <p className="cite">
                  &bdquo;
                  {event.cite}
                  &rdquo;
                  <br />
                  <span className="author">{event.citeAuthor}</span>
                </p>
              ) : null}

              <h1 className="text-uppercase text-center">
                {multilineTitle.map((item) => (
                  <span
                    key={multilineTitle.indexOf(item)}
                    className={
                      multilineTitle.indexOf(item) === 0
                        ? 'd-block display-1'
                        : 'd-block'
                    }
                  >
                    {item}
                  </span>
                ))}
              </h1>
              <p className="text-center location">{eventLocation.city}</p>
              <p className="text-center date">
                {`${eventStartDate.getDate()} ${
                  eventStartDate.getMonth() !== eventEndDate.getMonth()
                    ? months[eventStartDate.getMonth()]
                    : ''
                } - ${eventEndDate.getDate()} ${
                  months[eventEndDate.getMonth()]
                } ${eventEndDate.getFullYear()}`}
              </p>
            </div>
            <Counter eventStartDate={eventStartDate} />
            <Independence />
            <div className="register-btn text-center">
              <Button size="lg" href="/rejestracja">
                Zarejestruj się
              </Button>
            </div>
          </Container>
        </Jumbotron>
      </section>
      <Organizers organizers={organizers} />
      {eventSwitch()}
    </div>
  );
};

Home.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string,
    cite: PropTypes.string,
    citeAuthor: PropTypes.string,
    eventLocation: PropTypes.shape({ city: PropTypes.string }),
    eventStartDate: PropTypes.string,
    eventEndDate: PropTypes.string,
    eventFullName: PropTypes.string,
    picturesStrap: PropTypes.arrayOf(PropTypes.shape()),
    organizers: PropTypes.arrayOf(PropTypes.shape()),
    eventSiteMenu: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
  months: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentEvent: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Home;
