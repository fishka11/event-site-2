import React from 'react';

import { MAIN_ORGANIZER, HELPER_ORGANIZER } from '../data/Const';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.css';

const Footer = ({ organizers }) => {
  const mainOrganizer =
    (organizers &&
      organizers.find((i) => i.organizerType === MAIN_ORGANIZER)) ||
    {};
  const helperOrganizer =
    (organizers &&
      organizers.find((i) => i.organizerType === HELPER_ORGANIZER)) ||
    {};
  const organizer = helperOrganizer ? helperOrganizer : mainOrganizer;

  if (organizer) {
    return (
      <footer className="footer">
        <Container>
          <Row className="justify-content-sm-center">
            <Col md={4} className="organizer-logo">
              {organizer.webSite ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`http://${organizer.webSite}`}
                >
                  <img
                    fluid="true"
                    src={organizer.logo ? organizer.logo.url : null}
                    alt={`logo ${organizer.name}`}
                  />
                </a>
              ) : (
                <img
                  fluid="true"
                  src={organizer.logo ? organizer.logo.url : null}
                  alt={`logo ${organizer.name}`}
                />
              )}
            </Col>
            <Col md={8}>
              <Row className="justify-content-sm-center">
                <Col md={6}>
                  <address>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`http://${organizer.webSite}`}
                      >
                        <strong>{organizer.name}</strong>
                      </a>
                    </p>

                    <div className="address">
                      <FontAwesomeIcon icon="map-marker-alt" />
                      <p>
                        {organizer.address}
                        <br />
                        {`${organizer.postalCode} ${organizer.city}`}
                      </p>
                    </div>
                  </address>
                </Col>
                <Col md={6}>
                  <address>
                    <div className="address">
                      <FontAwesomeIcon icon="at" />
                      <p>
                        e-mail:{' '}
                        <a
                          href={`mailto:${
                            organizer.eMail ? organizer.eMail[0] : null
                          }`}
                        >
                          {organizer.eMail ? organizer.eMail[0] : null}
                        </a>
                      </p>
                    </div>
                    {organizer.phone
                      ? organizer.phone.map((item) => (
                          <div
                            key={organizer.phone.indexOf(item)}
                            className="address"
                          >
                            <FontAwesomeIcon icon="phone" />
                            <p>
                              tel:{' '}
                              <a href={`tel:${item.replace(/\s+/g, '')}`}>
                                {item}
                              </a>
                            </p>
                          </div>
                        ))
                      : null}
                    {organizer.fax
                      ? organizer.fax.map((item) => (
                          <div
                            key={organizer.fax.indexOf(item)}
                            className="address"
                          >
                            <FontAwesomeIcon icon="fax" />
                            <p>
                              fax:{' '}
                              <a href={`tel:${item.replace(/\s+/g, '')}`}>
                                {item}
                              </a>
                            </p>
                          </div>
                        ))
                      : null}
                  </address>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <p>© 2018 {organizer.shortName}</p>
        </Container>
      </footer>
    );
  }
};

export default Footer;
