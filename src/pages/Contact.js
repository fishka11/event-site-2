import React from "react";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contact.css";

function Contact(props) {
  const { meta, date, location, organizers } = props;

  let tense = "";
  if (Date.now() < date.start) {
    tense = "odbędzie się";
  } else if (Date.now() >= date.start && Date.now() <= date.end) {
    tense = "odbywa się";
  } else {
    tense = "odbył się";
  }
  const organizer = organizers.find((item) => item.mainOrganizer === true);
  console.log(location);

  return (
    <div className="page contact">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
      </Helmet>
      <Container>
        <h1>Kontakt & Lokalizacja</h1>
        <section className="contact-data">
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
                    {`${organizer.zip} ${organizer.city}`}
                  </p>
                </div>

                {organizer.phone.map((item) => (
                  <div key={item.id} className="address">
                    <FontAwesomeIcon icon="phone" />
                    <p>
                      tel:{" "}
                      <a href={`tel:${item.tel.replace(/\s+/g, "")}`}>
                        {item.tel}
                      </a>
                    </p>
                  </div>
                ))}
                {organizer.fax.map((item) => (
                  <div key={item.id} className="address">
                    <FontAwesomeIcon icon="fax" />
                    <p>
                      fax:{" "}
                      <a href={`tel:${item.fax.replace(/\s+/g, "")}`}>
                        {item.fax}
                      </a>
                    </p>
                  </div>
                ))}
                <div className="address">
                  <FontAwesomeIcon icon="at" />
                  <p>
                    <a href={`mailto:${organizer.email}`}>{organizer.email}</a>
                  </p>
                </div>
                <div className="address">
                  <FontAwesomeIcon icon="globe" />
                  <p>
                    <a href={`http://${organizer.url}`}>{organizer.url}</a>
                  </p>
                </div>
              </address>
            </Col>
            <Col className="right" xs={12} lg={6}>
              <p className="lead">{`Kongres ${tense} w dniach ${date.start.getDate()}${
                date.start.getMonth() !== date.end.getMonth()
                  ? `.${(date.start.getMonth() + 1)
                      .toString()
                      .padStart(2, "0")}`
                  : ""
              }-${date.end.getDate()}.${(date.end.getMonth() + 1)
                .toString()
                .padStart(2, "0")}.${date.start.getFullYear()} w`}</p>
              <h3>{location.name}</h3>
              <address>
                <div className="address">
                  <FontAwesomeIcon icon="map-marker-alt" />
                  <p>
                    {location.address.street}
                    <br />
                    {`${location.address.postCode} ${location.address.city}`}
                  </p>
                </div>
                <div className="address">
                  <FontAwesomeIcon icon="globe" />
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`http://${location.www}`}
                    >
                      {location.www}
                    </a>
                  </p>
                </div>
              </address>
            </Col>
          </Row>
        </section>
        <section className="google-map">
          <Row>
            <Col xs={12}></Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Contact;