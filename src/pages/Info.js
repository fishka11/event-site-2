import React from "react";

import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GoogleMap from "../components/EmbeddedGoogleMap";

import "./Info.css";

const Info = (props) => {
  const { meta, event, organizers } = props;
  const organizer = organizers.find((item) => item.mainOrganizer === true);
  let tense = "";
  if (Date.now() < event.eventDate.start) {
    tense = "Spotkamy się";
  } else if (
    Date.now() >= event.eventDate.start &&
    Date.now() <= event.eventDate.end
  ) {
    tense = "Jesteśmy";
  } else {
    tense = "Spotkaliśmy się";
  }

  return (
    <div className="page info">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
      </Helmet>
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
                  {`Przyjazd, rejestracja i zakwaterowanie uczestników ${
                    event.genitiveDeclinedEventType
                  }
                    w dniu ${event.eventDate.start.getDate()}.${(
                    event.eventDate.start.getMonth() + 1
                  )
                    .toString()
                    .padStart(
                      2,
                      "0"
                    )}.${event.eventDate.start.getFullYear()} r. do godz. ${
                    event.eventDate.start.getHours() - 1
                  }.${event.eventDate.start
                    .getMinutes()
                    .toString()
                    .padStart(2, "0")}.
                    Rozpoczęcie obrad o godz. ${event.eventDate.start.getHours()}.${event.eventDate.start
                    .getMinutes()
                    .toString()
                    .padStart(
                      2,
                      "0"
                    )}, a zakończenie ${event.eventDate.end.getDate()}.${(
                    event.eventDate.end.getMonth() + 1
                  )
                    .toString()
                    .padStart(2, "0")}.${event.eventDate.end.getFullYear()} r.
                    ok. godz. ${event.eventDate.end.getHours()}.${event.eventDate.end
                    .getMinutes()
                    .toString()
                    .padStart(2, "0")}.`}
                </li>
                <li>
                  <span className="font-weight-bold">
                    Koszt uczestnictwa w {event.locativeDeclinedEventType}{" "}
                    wynosi od osoby:
                  </span>
                  <ul>
                    <li className="font-weight-bold">
                      {`${event.eventPrices.singleRoomPrice} zł netto +23% VAT - zakwaterowanie w pokoju
                      jednoosobowym,`}
                    </li>
                    <li className="font-weight-bold">
                      {`${event.eventPrices.doubleRoomPrice} zł netto +23% VAT - zakwaterowanie w pokoju
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
                    {event.eventDiscounts.map((item) => (
                      <li key={item.id}>
                        {item.name !== "uczestnicy szkoleń"
                          ? `${item.name}: -${item.discount}`
                          : `${item.name} z ${
                              event.eventDate.start.getFullYear() - 1
                            } i ${event.eventDate.start.getFullYear()} r: -${
                              item.discount
                            }`}
                      </li>
                    ))}
                  </ul>
                  Zniżki nie sumują się.
                </li>
                <li>
                  Zgłoszenia uczestnictwa prosimy przesyłać najpóźniej na 5 dni
                  roboczych przed rozpoczęciem {event.genitiveDeclinedEventType}{" "}
                  na adres{" "}
                  <span className="font-weight-bold">
                    <a href={`mailto:${organizer.emails[0].email}`}>
                      {organizer.emails[0].email}
                    </a>
                  </span>
                  , faksem - nr tel.{" "}
                  <a href={`tel:${organizer.faxes[0].fax.replace(/\s+/g, "")}`}>
                    <span className="font-weight-bold">
                      {organizer.faxes[0].fax}
                    </span>
                  </a>{" "}
                  lub przy pomocy{" "}
                  <span className="font-weight-bold">
                    <a href="rejestracja">formularza zgłoszeniowego</a>
                  </span>
                  .
                </li>
                <li>
                  Należność za udział w Kongresie prosimy wpłacać na konto:{" "}
                  <span className="font-weight-bold">{organizer.bankName}</span>
                  , nr rachunku{" "}
                  <span className="font-weight-bold">
                    {organizer.bankAccount}
                  </span>{" "}
                  przed rozpoczęciem {event.genitiveDeclinedEventType} (nie
                  dotyczy sfery budżetowej).
                </li>
                <li>
                  Zgłoszenie udziału jest zobowiązaniem do zapłaty. Rezygnację
                  należy zgłaszać wyłącznie na adres{" "}
                  <a href={`mailto:${organizer.emails[0].email}`}>
                    {organizer.emails[0].email}
                  </a>{" "}
                  lub faxem{" "}
                  <a href={`tel:${organizer.faxes[0].fax.replace(/\s+/g, "")}`}>
                    {organizer.faxes[0].fax}
                  </a>
                  . Rezygnacja z uczestnictwa nie zgłoszona na 3 dni robocze
                  przed rozpoczęciem obrad nie zwalnia od zapłaty.
                </li>
                <li>
                  Miejsce Kongresu:{" "}
                  <span className="font-weight-bold">
                    {event.eventLocation.name}
                  </span>
                  , {event.eventLocation.address.street},{" "}
                  {event.eventLocation.address.postCode}{" "}
                  {event.eventLocation.address.city}.
                </li>
                <li>
                  Dane organizatora: {organizer.name}, {organizer.zip}{" "}
                  {organizer.city}, {organizer.address}, NIP: {organizer.nip},
                  REGON {organizer.regon}, e-mail: {organizer.emails[0].email},
                  tel. {organizer.phones[0].tel}, fax {organizer.faxes[0].fax}.
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
            <p className="lead">{event.eventLocation.name}</p>

            <div className="address">
              <FontAwesomeIcon icon="map-marker-alt" />
              <p>
                {event.eventLocation.address.street}
                <br />
                {event.eventLocation.address.postCode}{" "}
                {event.eventLocation.address.city}
              </p>
            </div>
            <div className="address">
              <FontAwesomeIcon icon="globe" />
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`http://${event.eventLocation.www}`}
                >
                  {event.eventLocation.www}
                </a>
              </p>
            </div>
          </address>
          <GoogleMap event={event} />
        </Container>
      </section>
    </div>
  );
};

export default Info;
