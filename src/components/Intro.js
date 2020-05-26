/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import "./Intro.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import PicturesStrap from "../components/PicturesStrap";

const Intro = (props) => {
  const { introText, pictures } = props;
  return (
    <section className="intro">
      <Container>
        {Object.entries(introText)
          .filter((item, index) => index === 0)
          .map((item) => (
            <p className="lead" key={item[0]}>
              {item[1]}
            </p>
          ))}
        {Object.entries(introText)
          .filter((item, index) => index > 0)
          .map((item) => (
            <p key={item[0]}>{item[1]}</p>
          ))}
        <div className="text-center">
          <Button className="call-to-action" size="lg" href="/tematyka">
            Zapoznaj się
            <br />z tematyka Kongresu
          </Button>
        </div>
        <div className="video">
          <Row className="justify-content-sm-center">
            <Col xs={12} sm={10} lg={8}>
              <h4 className="text-center">
                Reportaż TV Silesia z XV Kongresu Ochrony Informacji Niejawnych,
                Biznesowych i Danych Osobowych
              </h4>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col
              xs={12}
              sm={10}
              lg={8}
              className="embed-responsive embed-responsive-16by9"
            >
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/nS4hihsyn1Q"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </div>
      </Container>
      <PicturesStrap pictures={pictures} />
    </section>
  );
};
export default Intro;
