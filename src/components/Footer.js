import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Footer.css";

const Footer = (props) => {
  const { mainOrganizer } = props;

  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-sm-center">
          <Col md={4}>
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`http://${mainOrganizer.url}`}
                  >
                    <strong>
                      Krajowe Stowarzyszenie Ochrony Informacji Niejawnych
                    </strong>
                  </a>
                </address>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
