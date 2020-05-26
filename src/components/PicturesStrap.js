import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./PicturesStrap.css";

const PicturesStrap = (props) => {
  const { pictures } = props;

  return (
    <div className="pictures-strap">
      <Row className="justify-content-sm-center" noGutters>
        {pictures.map((item) => (
          <Col key={item.id} xs={4} md={2}>
            <img src={`assets/${item.picName}`} alt={item.picDesc} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PicturesStrap;
