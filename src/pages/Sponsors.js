import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import PatronsGroup from '../components/PatronsGroup';
import Meta from '../components/Meta';

import './Sponsors.css';

const Sponsors = ({ path, eventSiteMenu, patrons }) => {
  const collator = new Intl.Collator('pl', {
    numeric: true,
    sensitivity: 'base',
  });
  const sortedPatrons = patrons.length
    ? patrons.sort((a, b) => collator.compare(a.priority, b.priority))
    : patrons;

  return (
    <div className="page sponsors">
      <Meta eventSiteMenu={eventSiteMenu} path={path} />
      <Container>
        <h1>Patronat</h1>
      </Container>
      {sortedPatrons.map((item) => (
        <section key={item.priority} className="sponsors-list">
          <Container>
            <h3>{item.header.toUpperCase()}</h3>
            <PatronsGroup partnersList={item.list} />
          </Container>
        </section>
      ))}
    </div>
  );
};

Sponsors.propTypes = {
  eventSiteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  path: PropTypes.string.isRequired,
  patrons: PropTypes.arrayOf(
    PropTypes.shape({
      priority: PropTypes.number,
    })
  ),
};

Sponsors.defaultProps = {
  eventSiteMenu: [],
  patrons: [],
};

export default Sponsors;
