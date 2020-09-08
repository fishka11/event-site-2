import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Meta from '../components/Meta';

import './Speakers.css';

const Speakers = ({ path, eventSiteMenu, eventSpeakers }) => {
  const collator = new Intl.Collator('pl', {
    numeric: true,
    sensitivity: 'base',
  });

  const sortedEventSpeakers = eventSpeakers.length
    ? eventSpeakers.sort((a, b) => collator.compare(a.lastName, b.lastName))
    : eventSpeakers;

  return (
    <div className="page speakers">
      <Meta eventSiteMenu={eventSiteMenu} path={path} />
      <Container>
        <h1>Prelegenci</h1>
      </Container>
      <section className="speakers-list">
        <Container>
          <Row>
            {sortedEventSpeakers.map((item) => (
              <Col key={item.id} md={4}>
                <div className="speaker">
                  <img
                    className="mx-auto"
                    fluid="true"
                    src={item.photo.url}
                    alt={`${item.title ? item.title : ''} ${item.firstName} ${
                      item.lastName
                    }`}
                  />
                  <h2 className="text-center">{`${
                    item.title ? item.title : ''
                  } ${item.firstName} ${item.lastName}`}</h2>
                  <p className="text-center">{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

Speakers.propTypes = {
  eventSiteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  path: PropTypes.string.isRequired,
  eventSpeakers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      description: PropTypes.string,
      photo: PropTypes.shape({ url: PropTypes.string }),
    })
  ),
};

Speakers.defaultProps = {
  eventSiteMenu: [],
  eventSpeakers: [],
};

export default Speakers;
