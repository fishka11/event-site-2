import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Independence.css';

const Independence = () => (
  <Row className='independance justify-content-sm-center align-items-center'>
    <Col xs='12' md='auto'>
      <img src='assets/logo_pl_alternatywny.png' alt='logo Niepodległa' />
    </Col>
    <Col xs='12' lg='5'>
      <p>
        Projekt realizowany w ramach obchodów stulecia odzyskania niepodległości
        oraz odbudowy polskiej państwowości
      </p>
    </Col>
  </Row>
);

export default Independence;
