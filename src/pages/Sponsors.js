import React from "react";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Sponsors.css";

const Sponsors = (props) => {
  const { meta, sponsorsByKinds } = props;

  const setSponsorsSection = (currentKind) => {
    const filteredSponsorsArray = sponsorsByKinds.filter(
      (item) => item.kind.toLowerCase() === currentKind.toLowerCase()
    );

    const columns = 1;

    return (
      <div>
        <h3>{currentKind}</h3>
        <Row className="justify-content-sm-center">
          {filteredSponsorsArray[0].map((item) => (
            <Col
              key={item.id}
              xs={12}
              sm={columns >= 6 ? columns : 6}
              md={columns >= 3 ? columns : 3}
            >
              <div className="sponsor">
                <img
                  className="mx-auto"
                  fluid="true"
                  src={`assets/sponsors/${item.logoFilename}`}
                  alt={item.name}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  return (
    <div className="page sponsors">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
      </Helmet>

      <Container>
        <h1>Patronat</h1>
        <section className="main-sponsors">
          {setSponsorsSection("patronat główny")}
          {/* <h3>Patronat główny</h3>
          <Row className="justify-content-sm-center">
            {sponsors
              .filter((item) => item.kind === "patronat główny")
              .map((item) => (
                <Col
                  key={item.id}
                  xs={12}
                  sm={mainSponsorsCols >= 6 ? mainSponsorsCols : 6}
                  md={mainSponsorsCols >= 3 ? mainSponsorsCols : 3}
                >
                  <div className="sponsor">
                    <img
                      className="mx-auto"
                      fluid="true"
                      src={`assets/sponsors/${item.logoFilename}`}
                      alt={item.name}
                    />
                  </div>
                </Col>
              ))}
          </Row> */}
        </section>
        <section className="strategic-sponsors">
          <h3>Patronat strategiczny</h3>
          <Row className="justify-content-sm-center">
            {/* {sponsors
                .filter((item) => item.kind === "patronat strategiczny")
                .map((item) => (
                  <Col
                    key={item.id}
                    xs={12}
                    sm={strategicSponsorsCols >= 6 ? strategicSponsorsCols : 6}
                    md={strategicSponsorsCols >= 3 ? strategicSponsorsCols : 3}
                  >
                    <div className="sponsor">
                      <img
                        className="mx-auto"
                        fluid="true"
                        src={`assets/sponsors/${item.logoFilename}`}
                        alt={item.name}
                      />
                    </div>
                  </Col>
                ))} */}
          </Row>
        </section>
        <section className="sponsors">
          <h3>Patronat</h3>
          <Row className="justify-content-sm-center">
            {/* {sponsors
                .filter((item) => item.kind === "patronat")
                .map((item) => (
                  <Col
                    key={item.id}
                    xs={12}
                    sm={commonSponsorsCols >= 6 ? commonSponsorsCols : 6}
                    md={commonSponsorsCols >= 4 ? commonSponsorsCols : 4}
                  >
                    <div className="sponsor">
                      <img
                        className="mx-auto"
                        fluid="true"
                        src={`assets/sponsors/${item.logoFilename}`}
                        alt={item.name}
                      />
                    </div>
                  </Col>
                ))} */}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Sponsors;
