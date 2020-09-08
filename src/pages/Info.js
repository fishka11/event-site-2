import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GoogleMap from '../components/EmbeddedGoogleMap';
import Meta from '../components/Meta';
import { MAIN_ORGANIZER } from '../data/Const';

import './Info.css';

const Info = ({ eventSiteMenu, event, path, discounts }) => {
  const eventStartDate =
    (event && new Date(event.eventStartDate)) || new Date();
  const eventEndDate = (event && new Date(event.eventEndDate)) || new Date();
  const eventDuration = eventEndDate.getDate() - eventStartDate.getDate();
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
    tense = 'Spotkamy się';
  } else if (Date.now() >= eventStartDate && Date.now() <= eventEndDate) {
    tense = 'Jesteśmy';
  } else {
    tense = 'Spotkaliśmy się';
  }

  return (
    <div className="page info">
      <Meta eventSiteMenu={eventSiteMenu} path={path} />
      <Container>
        <h1>Informacje organizacyjne</h1>
      </Container>
      <section className="organizational-info">
        <Container>
          <Row>
            <Col xs={2} sm={1}>
              <div className="info-pointer">
                <img
                  className="mx-auto"
                  fluid="true"
                  src="assets/agenda-pointer.png"
                  alt="pointer"
                />
              </div>
            </Col>
            <Col xs={10} sm={11}>
              <ol>
                <li>
                  Przyjazd, rejestracja i zakwaterowanie uczestników{' '}
                  {event.genitiveEventType} w dniu {eventStartDate.getDate()}.
                  {(eventStartDate.getMonth() + 1).toString().padStart(2, '0')}.
                  {eventStartDate.getFullYear()} r. do godz.{' '}
                  {eventStartDate.getHours() - 1}.
                  {eventDuration < 2
                    ? (eventStartDate.getMinutes() + 30)
                        .toString()
                        .padStart(2, '0')
                    : eventStartDate.getMinutes().toString().padStart(2, '0')}
                  . Rozpoczęcie obrad o godz. {eventStartDate.getHours()}.
                  {eventStartDate.getMinutes().toString().padStart(2, '0')}, a
                  zakończenie {eventEndDate.getDate()}.
                  {(eventEndDate.getMonth() + 1).toString().padStart(2, '0')}.
                  {eventEndDate.getFullYear()} r. ok. godz.{' '}
                  {eventEndDate.getHours()}.
                  {eventEndDate.getMinutes().toString().padStart(2, '0')}.
                </li>
                <li>
                  <span className="font-weight-bold">
                    Koszt uczestnictwa w {event.locativeEventType} wynosi od
                    osoby:
                  </span>
                  <ul>
                    <li className="font-weight-bold">
                      {`${event.singleRoomPrice} zł netto +23% VAT - zakwaterowanie w pokoju
                      jednoosobowym,`}
                    </li>
                    <li className="font-weight-bold">
                      {`${event.doubleRoomPrice} zł netto +23% VAT - zakwaterowanie w pokoju
                      dwuosobowym.`}
                    </li>
                  </ul>
                  Cena obejmuje: wykłady, materiały szkoleniowe, certyfikat,
                  wyżywienie, zakwaterowanie.
                  <br />
                  <span className="font-italic">
                    Szkolenia w zakresie kształcenia zawodowego lub
                    przekwalifikowania finansowane w co najmniej 70% ze środków
                    publicznych są zwolnione z podatku VAT. W przypadku
                    korzystania ze zwolnienia prosimy o przesłanie oświadczenia
                    wraz ze zgłoszeniem uczestnictwa.
                  </span>
                </li>
                <li>
                  Preferencyjne zniżki:
                  <ul>
                    {discounts.map((item) => (
                      <li key={item.id}>
                        {item.name !== 'uczestnicy szkoleń'
                          ? `${item.name}: -${item.discount}%`
                          : `${item.name} z ${
                              eventStartDate.getFullYear() - 1
                            } i ${eventStartDate.getFullYear()} r: -${
                              item.discount
                            }%`}
                      </li>
                    ))}
                  </ul>
                  Zniżki nie sumują się.
                </li>
                <li>
                  Zgłoszenia uczestnictwa prosimy przesyłać najpóźniej na 5 dni
                  roboczych przed rozpoczęciem {event.genitiveEventType} na
                  adres{' '}
                  <span className="font-weight-bold">
                    <a href={`mailto:${email}`}>{email}</a>
                  </span>
                  , faksem - nr tel.{' '}
                  <a href={`tel:${fax.replace(/\s+/g, '')}`}>
                    <span className="font-weight-bold">{fax}</span>
                  </a>{' '}
                  lub przy pomocy{' '}
                  <span className="font-weight-bold">
                    <a href="rejestracja">formularza zgłoszeniowego</a>
                  </span>
                  .
                </li>
                <li>
                  Należność za udział w Kongresie prosimy wpłacać na konto:{' '}
                  <span className="font-weight-bold">{organizer.bankName}</span>
                  , nr rachunku{' '}
                  <span className="font-weight-bold">
                    {organizer.bankAccount}
                  </span>{' '}
                  przed rozpoczęciem {event.genitiveEventType} (nie dotyczy
                  sfery budżetowej).
                </li>
                <li>
                  Zgłoszenie udziału jest zobowiązaniem do zapłaty. Rezygnację
                  należy zgłaszać wyłącznie na adres{' '}
                  <a href={`mailto:${email}`}>{email}</a> lub faxem{' '}
                  <a href={`tel:${fax.replace(/\s+/g, '')}`}>{fax}</a>.
                  Rezygnacja z uczestnictwa nie zgłoszona na 3 dni robocze przed
                  rozpoczęciem obrad nie zwalnia od zapłaty.
                </li>
                <li>
                  Miejsce {event.genitiveEventType}:{' '}
                  <span className="font-weight-bold">{location.name}</span>,{' '}
                  {location.address}, {location.postalCode} {location.city}.
                </li>
                <li>
                  Dane organizatora: {organizer.name}, {organizer.postalCode}{' '}
                  {organizer.city}, {organizer.address}, NIP: {organizer.nip},
                  REGON {organizer.regon}, e-mail: {email}, tel. {phone}, fax{' '}
                  {fax}.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="meeting-place">
        <Container>
          <h2>{tense} tutaj:</h2>

          <address>
            <p className="lead">{location.name}</p>

            <div className="address">
              <FontAwesomeIcon icon="map-marker-alt" />
              <p>
                {location.address}
                <br />
                {location.postalCode} {location.city}
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
          <GoogleMap location={location} title={event.name} />
        </Container>
      </section>
    </div>
  );
};

Info.propTypes = {
  eventSiteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  path: PropTypes.string.isRequired,
  event: PropTypes.shape(),
  discounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      discount: PropTypes.number,
    })
  ),
};

Info.defaultProps = {
  eventSiteMenu: [],
  event: {},
  discounts: [],
};

export default Info;
