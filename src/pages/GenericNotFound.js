import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import "./GenericNotFound.css";

const GenericNotFound = (props) => {
  const { meta, event } = props;
  const eventFullName = Object.values(event.eventFullName).join(" ");
  return (
    <div className="page the404">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
      </Helmet>
      <Container>
        <h1>404</h1>
        <h2>Strona o takim adresie nie istnieje</h2>
        <p>Zapraszamy na stronę główną</p>
        <p>
          <a href="/">{eventFullName}</a>
        </p>
      </Container>
    </div>
  );
};

export default GenericNotFound;
