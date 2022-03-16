import React from 'react';
import { Helmet } from 'react-helmet';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Speakers.css';

const Speakers = (props) => {
  const { meta, eventSpeakers } = props;

  const collator = new Intl.Collator('pl', {
    numeric: true,
    sensitivity: 'base',
  });
  const sortedEventSpeakers = eventSpeakers.sort((a, b) =>
    collator.compare(a.lastName, b.lastName)
  );

  return (
    <div className='page speakers'>
      <Helmet>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description}></meta>
      </Helmet>
      <Container>
        <h1>Prelegenci</h1>
      </Container>
      <section className='speakers-list'>
        <Container>
          <Row>
            {sortedEventSpeakers.map((item) => (
              <Col key={item.id} md={4}>
                <div className='speaker'>
                  <img
                    className='mx-auto'
                    fluid='true'
                    src={`assets/speakers/speaker-${item.picName}.jpg`}
                    alt={`${item.title} ${item.firstName} ${item.lastName}`}
                  />
                  <h2 className='text-center'>{`${item.title} ${item.firstName} ${item.lastName}`}</h2>
                  <p className='text-center'>{item.description}</p>
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
