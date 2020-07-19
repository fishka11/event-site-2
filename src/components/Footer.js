import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

const Footer = (props) => {
  const { mainOrganizer } = props;

  if (mainOrganizer.name) {
    return (
      <footer className="footer">
        <Container>
          <Row className="justify-content-sm-center">
            <Col md={4} className="organizer-logo">
              {!!mainOrganizer.url ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`http://${mainOrganizer.url}`}
                >
                  <img
                    fluid="true"
                    src={`assets/${mainOrganizer.logoFilename}`}
                    alt={`logo ${mainOrganizer.name}`}
                  />
                </a>
              ) : (
                <img
                  fluid="true"
                  src={`assets/${mainOrganizer.logoFilename}`}
                  alt={`logo ${mainOrganizer.name}`}
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
                        href={`http://${mainOrganizer.url}`}
                      >
                        <strong>{mainOrganizer.name}</strong>
                      </a>
                    </p>

                    <div className="address">
                      <FontAwesomeIcon icon="map-marker-alt" />
                      <p>
                        {mainOrganizer.address}
                        <br />
                        {`${mainOrganizer.zip} ${mainOrganizer.city}`}
                      </p>
                    </div>
                  </address>
                </Col>
                <Col md={6}>
                  <address>
                    <div className="address">
                      <FontAwesomeIcon icon="at" />
                      <p>
                        e-mail:{" "}
                        <a href={`mailto:${mainOrganizer.emails[0].email}`}>
                          {mainOrganizer.emails[0].email}
                        </a>
                      </p>
                    </div>
                    {mainOrganizer.phones.map((item) => (
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
                    {mainOrganizer.faxes.map((item) => (
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
                  </address>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <p>© 2018 {mainOrganizer.shortName}</p>
        </Container>
      </footer>
    );
  }
};

export default Footer;
