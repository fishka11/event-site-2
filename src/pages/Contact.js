import React from 'react';
import { Helmet } from 'react-helmet';

import GoogleMap from '../components/EmbeddedGoogleMap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Contact.css';

const Contact = (props) => {
  const { meta, event } = props;

  let tense = '';
  if (Date.now() < event.eventDate.start) {
    tense = 'odbędzie się';
  } else if (
    Date.now() >= event.eventDate.start &&
    Date.now() <= event.eventDate.end
  ) {
    tense = 'odbywa się';
  } else {
    tense = 'odbył się';
  }
  const organizer = event.organizersList.find(
    (item) => item.mainOrganizer === true
  );

  return (
    <div className='page contact'>
      <Helmet>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description}></meta>
      </Helmet>
      <Container>
        <h1>Kontakt & Lokalizacja</h1>
      </Container>

      <section className='contact-data'>
        <Container>
          <Row>
            <Col className='left' xs={12} lg={6}>
              <p className='lead'>Kontakt do organizatora</p>
              <h3>{organizer.name}</h3>
              <address>
                <div className='address'>
                  <FontAwesomeIcon icon='map-marker-alt' />
                  <p>
                    {organizer.address}
                    <br />
                    {`${organizer.zip} ${organizer.city}`}
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
                {organizer.emails.map((item) => (
                  <div key={item.id} className='address'>
                    <FontAwesomeIcon icon='at' />
                    <p>
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </p>
                  </div>
                ))}

                <div className='address'>
                  <FontAwesomeIcon icon='globe' />
                  <p>
                    <a href={`http://${organizer.url}`}>{organizer.url}</a>
                  </p>
                </div>
              </address>
            </Col>
            <Col className='right' xs={12} lg={6}>
              <p className='lead'>{`${event.eventType
                .charAt(0)
                .toUpperCase()}${event.eventType.slice(
                1
              )} ${tense} w dniach ${event.eventDate.start.getDate()}${
                event.eventDate.start.getMonth() !==
                event.eventDate.end.getMonth()
                  ? `.${(event.eventDate.start.getMonth() + 1)
                      .toString()
                      .padStart(2, '0')}`
                  : ''
              }-${event.eventDate.end.getDate()}.${(
                event.eventDate.end.getMonth() + 1
              )
                .toString()
                .padStart(
                  2,
                  '0'
                )}.${event.eventDate.start.getFullYear()} w`}</p>
              <h3>{event.eventLocation.name}</h3>
              <address>
                <div className='address'>
                  <FontAwesomeIcon icon='map-marker-alt' />
                  <p>
                    {event.eventLocation.address.street}
                    <br />
                    {`${event.eventLocation.address.postCode} ${event.eventLocation.address.city}`}
                  </p>
                </div>
                <div className='address'>
                  <FontAwesomeIcon icon='globe' />
                  <p>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={`http://${event.eventLocation.www}`}
                    >
                      {event.eventLocation.www}
                    </a>
                  </p>
                </div>
              </address>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='google-map'>
        <Container>
          <Row>
            <Col xs={12}>
              <GoogleMap event={event} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
