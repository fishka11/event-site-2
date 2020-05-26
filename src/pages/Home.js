import React from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import Counter from "../components/Counter";
import Independence from "../components/Indepenence";
import Organizers from "../components/Organizers";
import Intro from "../components/Intro";

import "./Home.css";

function Home(props) {
  const { date, location, months, organizers, introText, pictures } = props;
  return (
    <div className="home">
      <section className="top">
        <Jumbotron fluid>
          <Container>
            <div className="what-where-when">
              <h1 className="text-uppercase text-center">
                <span className="d-block display-1">XVI Kongres</span>
                <span className="d-block">Ochrony Informacji Niejawnych,</span>
                <span className="d-block">Biznesowych i Danych Osobowych</span>
              </h1>
              <p className="text-center location">{location.address.city}</p>
              <p className="text-center date">
                {`${date.start.getDate()} ${
                  date.start.getMonth() !== date.end.getMonth()
                    ? months[date.start.getMonth()]
                    : ""
                } - ${date.end.getDate()} ${
                  months[date.end.getMonth()]
                } ${date.end.getFullYear()}`}
              </p>
            </div>
            <Counter eventDate={date} />
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
}

export default Home;
