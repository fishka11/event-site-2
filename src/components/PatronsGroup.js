import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../pages/Sponsors.css';

const PatronsGroup = ({ partnersList = [] }) => {
  return (
    <Row className="justify-content-sm-center">
      {partnersList.map((item) => (
        <Col key={item.id} xs={12} sm={6} lg={4}>
          <div className="sponsor">
            <img
              className="mx-auto"
              fluid="true"
              src={item.logo.url}
              alt={item.name}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

PatronsGroup.propTypes = {
  partnersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      logo: PropTypes.shape({ url: PropTypes.string }),
    })
  ).isRequired,
};

export default PatronsGroup;
