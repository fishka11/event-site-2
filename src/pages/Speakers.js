import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Speakers = (props) => {
  const { eventSpeakers } = props;

  return (
    <div className="page speakers">
      <section className="speakers-list">
        <Container>
          <h1>Prelegenci</h1>
          <Row>
            {eventSpeakers.map((item) => (
              <Col key={item.id} md={4}>
                <div>
                  <img
                    src={`assets/speakers/speaker-${item.picName}.jpg`}
                    alt={`${item.title} ${item.firstName} ${item.lastName}`}
                  />
                  <h2>{`${item.title} ${item.firstName} ${item.lastName}`}</h2>
                  <p>{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Speakers;
