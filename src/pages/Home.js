import React from 'react';
import { Helmet } from 'react-helmet';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import Counter from '../components/Counter';
import KOINIntro from '../components/KOINIntro';
import KBNIntro from '../components/KBNIntro';
import Independence from '../components/Indepenence';
import Organizers from '../components/Organizers';
// import InfoBox from '../components/InfoBox';

import './Home.css';

const Home = (props) => {
  const { meta, event, months, currentEvent } = props;

  const eventSwitch = () => {
    switch (currentEvent) {
      case 'koin':
        return <KOINIntro pictures={event.picturesStrap} />;
      case 'kbn':
        return <KBNIntro pictures={event.picturesStrap} />;
      default:
        return null;
    }
  };

  return (
    <div className="home">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
      </Helmet>
      {/* <InfoBox /> */}
      <section className="top">
        <Jumbotron fluid>
          <Container>
            <div className="what-where-when">
              {event.cite ? (
                <p className="cite">
                  "Ojczyzna to wielki zbiorowy obowiązek"
                  <br />
                  <span className="author">Cyprian Kamil Norwid</span>
                </p>
              ) : null}

              <h1 className="text-uppercase text-center">
                <span className="d-block display-1">
                  {event.eventFullName.l1}
                </span>
                <span className="d-block">{event.eventFullName.l2}</span>
                <span className="d-block">{event.eventFullName.l3}</span>
              </h1>
              <p className="text-center location">
                {event.eventLocation.address.city}
              </p>
              <p className="text-center date">
                {`${event.eventDate.start.getDate()} ${
                  event.eventDate.start.getMonth() !==
                  event.eventDate.end.getMonth()
                    ? months[event.eventDate.start.getMonth()]
                    : ''
                } - ${event.eventDate.end.getDate()} ${
                  months[event.eventDate.end.getMonth()]
                } ${event.eventDate.end.getFullYear()}`}
              </p>
            </div>
            <Counter eventDate={event.eventDate} />
            <Independence />
            <div className="register-btn text-center">
              <Button size="lg" href="/rejestracja">
                Zarejestruj się
              </Button>
            </div>
          </Container>
        </Jumbotron>
      </section>
      <Organizers organizers={event.organizersList} />
      {eventSwitch()}
    </div>
  );
};

export default Home;
