import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GoogleMap from '../components/EmbeddedGoogleMap';
import Meta from '../components/Meta';
import { MAIN_ORGANIZER } from '../data/Const';

import './Contact.css';

const Contact = ({ eventSiteMenu, event, path }) => {
  const eventStartDate =
    (event && new Date(event.eventStartDate)) || new Date();
  const eventEndDate = (event && new Date(event.eventEndDate)) || new Date();
  const eventType = (event && event.eventType) || '';
  const organizers = (event && event.organizers) || [];
  const organizer = organizers.length
    ? organizers.find((item) => item.organizerType === MAIN_ORGANIZER)
    : {};
  const email = (organizer && organizer.eMail && organizer.eMail[0]) || '';
  const phone = (organizer && organizer.phone && organizer.phone[0]) || '';
  const fax = (organizer && organizer.fax && organizer.fax[0]) || '';
  const location = (event && event.eventLocation) || {};

  let tense = '';
  if (Date.now() < eventStartDate) {
    tense = 'odbędzie się';
  } else if (Date.now() >= eventStartDate && Date.now() <= eventEndDate) {
    tense = 'odbywa się';
  } else {
    tense = 'odbył się';
  }

  return (
    <div className="page contact">
      <Meta eventSiteMenu={eventSiteMenu} path={path} />
      <Container>
        <h1>Kontakt & Lokalizacja</h1>
      </Container>

      <section className="contact-data">
        <Container>
          <Row>
            <Col className="left" xs={12} lg={6}>
              <p className="lead">Kontakt do organizatora</p>
              <h3>{organizer.name}</h3>
              <address>
                <div className="address">
                  <FontAwesomeIcon icon="map-marker-alt" />
                  <p>
                    {organizer.address}
                    <br />
                    {`${organizer.postalCode} ${organizer.city}`}
                  </p>
                </div>
                <div className="address">
                  <FontAwesomeIcon icon="phone" />
                  <p>
                    tel:{' '}
                    <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                  </p>
                </div>
                <div className="address">
                  <FontAwesomeIcon icon="fax" />
                  <p>
                    fax: <a href={`tel:${fax.replace(/\s+/g, '')}`}>{fax}</a>
                  </p>
                </div>
                <div className="address">
                  <FontAwesomeIcon icon="at" />
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
                <div className="address">
                  <FontAwesomeIcon icon="globe" />
                  <p>
                    <a href={`http://${organizer.webSite}`}>
                      {organizer.webSite}
                    </a>
                  </p>
                </div>
              </address>
            </Col>
            <Col className="right" xs={12} lg={6}>
              <p className="lead">{`${eventType
                .charAt(0)
                .toUpperCase()}${eventType.slice(
                1
              )} ${tense} w dniach ${eventStartDate.getDate()}${
                eventStartDate.getMonth() !== eventEndDate.getMonth()
                  ? `.${(eventStartDate.getMonth() + 1)
                      .toString()
                      .padStart(2, '0')}`
                  : ''
              }-${eventEndDate.getDate()}.${(eventEndDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}.${eventStartDate.getFullYear()} w`}</p>
              <h3>{location.name}</h3>
              <address>
                <div className="address">
                  <FontAwesomeIcon icon="map-marker-alt" />
                  <p>
                    {location.address}
                    <br />
                    {`${location.postalCode} ${location.city}`}
                  </p>
                </div>
                <div className="address">
                  <FontAwesomeIcon icon="globe" />
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`http://${location.webSite}`}
                    >
                      {location.webSite}
                    </a>
                  </p>
                </div>
              </address>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="google-map">
        <Container>
          <Row>
            <Col xs={12}>
              <GoogleMap location={location} title={event.name} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

Contact.propTypes = {
  eventSiteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  path: PropTypes.string.isRequired,
  event: PropTypes.shape(),
};

Contact.defaultProps = {
  eventSiteMenu: [],
  event: {},
};

export default Contact;
