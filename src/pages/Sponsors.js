import React from "react";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Sponsors.css";

function Sponsors(props) {
  const { meta, sponsors, sponsorKinds } = props;

  const mainSponsorCols = Math.floor(
    12 / 1
    //   sponsorKinds.filter((item) => item["kind"] === "patronat główny")[0].count
  );
  console.log(mainSponsorCols);

  return (
    <div className="page sponsors">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
      </Helmet>

      <Container>
        <h1>Patronat</h1>
        <section className="main-sponsors">
          <Row className="justify-content-sm-center">
            {sponsors
              .filter((item) => item.kind === "patronat główny")
              .map((item) => (
                <Col key={item.id} sm={12}>
                  <div className="sponsor">
                    <img
                      className="mx-auto"
                      fluid="true"
                      src="assets/agenda-pointer.png"
                      alt="pointer"
                    />
                  </div>
                </Col>
              ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Sponsors;
