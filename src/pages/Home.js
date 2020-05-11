import React from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import Counter from "../components/Counter";

import "./Home.css";

function Home(props) {
  const { date, location, months } = props;
  return (
    <div className="home">
      <section className="home-top">
        <Jumbotron fluid>
          <Container>
            <h1 className="text-uppercase text-center">
              <span className="d-block display-1">XVI Kongres</span>
              <span className="d-block">Ochrony Informacji Niejawnych,</span>
              <span className="d-block">Biznesowych i Danych Osobowych</span>
            </h1>
            <p className="text-center location">{location.address.city}</p>
            <p className="text-center date">
              {`${date.start.getDate()} ${
                date.start.getMonth() !== date.end.getMonth()
                  ? months[date.start.getMonth]
                  : ""
              } - ${date.end.getDate()} ${
                months[date.end.getMonth()]
              } ${date.end.getFullYear()}`}
            </p>
          </Container>
          <Counter eventDate={date} />
        </Jumbotron>
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Home</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
