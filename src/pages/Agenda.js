import React from "react";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Agenda.css";

function Agenda(props) {
  const { meta, agenda } = props;

  return (
    <div className="page agenda">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
      </Helmet>
      <Container>
        <h1>Tematyka i Program</h1>
      </Container>
      <section className="agenda-all">
        <Container>
          <div className="agenda-list">
            {agenda.map((item) => (
              <Row key={item.id} className="agenda-item">
                <Col xs={2} sm={1}>
                  <div className="agenda-pointer">
                    <img
                      className="mx-auto"
                      fluid="true"
                      src="assets/agenda-pointer.png"
                      alt="pointer"
                    />
                  </div>
                </Col>
                <Col xs={10} sm={11} className="agenda-item-title">
                  <h3>{item.title}</h3>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Agenda;
