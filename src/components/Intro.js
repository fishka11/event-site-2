import React from "react";

import Container from "react-bootstrap/Container";

import "./Intro.css";

const Intro = (props) => {
  const { introText } = props;
  return (
    <section className="intro">
      <Container>
        {Object.entries(introText).map((item, index) => (
          <p key={item[0]}>{item[1]}</p>
        ))}
      </Container>
    </section>
  );
};
export default Intro;
