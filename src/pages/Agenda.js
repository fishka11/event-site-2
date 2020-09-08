import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Meta from '../components/Meta';

import './Agenda.css';

const Agenda = ({ path, eventSiteMenu, agenda }) => {
  return (
    <div className="page agenda">
      <Meta eventSiteMenu={eventSiteMenu} path={path} />
      <Container>
        <h1>Tematyka i Program</h1>
      </Container>
      <section className="agenda-all">
        <Container>
          <div className="agenda-list">
            {agenda.map((item) => (
              <Row key={agenda.indexOf(item)} className="agenda-item">
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
                  <h3>{item}</h3>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

Agenda.propTypes = {
  eventSiteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  path: PropTypes.string.isRequired,
  agenda: PropTypes.arrayOf(PropTypes.string),
};

Agenda.defaultProps = {
  eventSiteMenu: [],
  agenda: [],
};

export default Agenda;
