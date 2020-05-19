import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Independence.css";

const Independence = () => (
  <Row className="independence">
    <Col className="text-right">
      <img src="assets/logo_pl_alternatywny.png" alt="logo Niepodległa" />
    </Col>
    <Col>
      <p class="">
        Projekt realizowany w ramach obchodów stulecia odzyskania niepodległości
        oraz dbudowy polskiej państwowości
      </p>
    </Col>
  </Row>
);

export default Independence;
