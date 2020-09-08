import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './PicturesStrap.css';

const PicturesStrap = ({ pictures }) => {
  return (
    <div className="pictures-strap">
      <Row className="justify-content-sm-center" noGutters>
        {pictures.map((item) => (
          <Col key={item.id} xs={4} md={2}>
            <img src={item.url} alt="Zdjęcie dekoracyjne" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PicturesStrap;
