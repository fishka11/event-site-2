import React from 'react';
import { Helmet } from 'react-helmet';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Sponsors.css';

const Sponsors = (props) => {
  const { meta, sponsorsByKinds } = props;

  const compare = (a, b) => {
    const first = parseInt(a.priority);
    const second = parseInt(b.priority);

    let comparison = 0;

    first > second ? (comparison = 1) : (comparison = -1);
    return comparison;
  };

  const sortedByPriority = sponsorsByKinds.sort(compare);

  return (
    <div className='page sponsors'>
      <Helmet>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description}></meta>
      </Helmet>
      <Container>
        <h1>Patronat</h1>
      </Container>
      {sortedByPriority.map((item) =>
        item.sponsors.length ? (
          <section key={item.priority} className='sponsors-list'>
            <Container>
              <h3>{item.kind.toUpperCase()}</h3>
              <Row className='justify-content-sm-center'>
                {item.sponsors.map((item, array) => (
                  <Col key={item.id} xs={12} sm={6} lg={4}>
                    <div className='sponsor'>
                      <img
                        className='mx-auto'
                        fluid='true'
                        src={`assets/sponsors/${item.logoFilename}`}
                        alt={item.name}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        ) : null
      )}
    </div>
  );
};

export default Sponsors;
