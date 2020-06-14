import React from "react";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import Counter from "../components/Counter";
import Independence from "../components/Indepenence";
import Organizers from "../components/Organizers";
import Intro from "../components/Intro";

import "./Home.css";

const Home = (props) => {
  const { meta, event, months, organizers, introText, pictures } = props;

  console.log(event);

  return (
    <div className="home">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
      </Helmet>
      <section className="top">
        <Jumbotron fluid>
          <Container>
            <div className="what-where-when">
              <h1 className="text-uppercase text-center">
                <span className="d-block display-1">XVI Kongres</span>
                <span className="d-block">Ochrony Informacji Niejawnych,</span>
                <span className="d-block">Biznesowych i Danych Osobowych</span>
              </h1>
              <p className="text-center location">
                {event.eventLocation.address.city}
              </p>
              <p className="text-center date">
                {`${event.eventDate.start.getDate()} ${
                  event.eventDate.start.getMonth() !==
                  event.eventDate.end.getMonth()
                    ? months[event.eventDate.start.getMonth()]
                    : ""
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
      <Organizers organizers={organizers} />
      <Intro introText={introText} pictures={pictures} />
    </div>
  );
};

export default Home;
