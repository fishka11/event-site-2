import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.css';

const Footer = (props) => {
  const { mainOrganizer, helperOrganizer } = props;
  const organizer = helperOrganizer ? helperOrganizer : mainOrganizer;

  if (organizer) {
    return (
      <footer className='footer'>
        <Container>
          <Row className='justify-content-sm-center'>
            <Col md={4} className='organizer-logo'>
              {organizer.url ? (
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`http://${organizer.url}`}
                >
                  <img
                    fluid='true'
                    src={`assets/${organizer.logoFilename}`}
                    alt={`logo ${organizer.name}`}
                  />
                </a>
              ) : (
                <img
                  fluid='true'
                  src={`assets/${organizer.logoFilename}`}
                  alt={`logo ${organizer.name}`}
                />
              )}
            </Col>
            <Col md={8}>
              <Row className='justify-content-sm-center'>
                <Col md={6}>
                  <address>
                    <p>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={`http://${organizer.url}`}
                      >
                        <strong>{organizer.name}</strong>
                      </a>
                    </p>

                    <div className='address'>
                      <FontAwesomeIcon icon='map-marker-alt' />
                      <p>
                        {organizer.address}
                        <br />
                        {`${organizer.zip} ${organizer.city}`}
                      </p>
                    </div>
                  </address>
                </Col>
                <Col md={6}>
                  <address>
                    <div className='address'>
                      <FontAwesomeIcon icon='at' />
                      <p>
                        e-mail:{' '}
                        <a href={`mailto:${organizer.emails[0].email}`}>
                          {organizer.emails[0].email}
                        </a>
                      </p>
                    </div>
                    {organizer.phones.map((item) => (
                      <div key={item.id} className='address'>
                        <FontAwesomeIcon icon='phone' />
                        <p>
                          tel:{' '}
                          <a href={`tel:${item.tel.replace(/\s+/g, '')}`}>
                            {item.tel}
                          </a>
                        </p>
                      </div>
                    ))}
                    {organizer.faxes.map((item) => (
                      <div key={item.id} className='address'>
                        <FontAwesomeIcon icon='fax' />
                        <p>
                          fax:{' '}
                          <a href={`tel:${item.fax.replace(/\s+/g, '')}`}>
                            {item.fax}
                          </a>
                        </p>
                      </div>
                    ))}
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
