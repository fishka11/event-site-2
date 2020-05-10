import React from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import { eventLocation, evantDate, polishMonths } from "../constans/Const";

import "./Home.css";

function Home() {
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
            <p className="text-center location">{eventLocation.address.city}</p>
            <p className="text-center date">
              {`${evantDate.start.getDate()} ${
                evantDate.start.getMonth() !== evantDate.end.getMonth()
                  ? polishMonths[evantDate.start.getMonth]
                  : ""
              } - ${evantDate.end.getDate()} ${
                polishMonths[evantDate.end.getMonth()]
              } ${evantDate.end.getFullYear()}`}
            </p>
          </Container>
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
