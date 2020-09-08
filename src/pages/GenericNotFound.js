import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import Meta from '../components/Meta';

import './GenericNotFound.css';

const GenericNotFound = ({ eventSiteMenu, event, path }) => {
  const eventFullName = (event && event.eventFullName) || '';
  return (
    <div className="page the404">
      <Meta eventSiteMenu={eventSiteMenu} path={path} />
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

GenericNotFound.propTypes = {
  eventSiteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  path: PropTypes.string.isRequired,
  event: PropTypes.shape(),
};

GenericNotFound.defaultProps = {
  eventSiteMenu: [],
  event: {},
};

export default GenericNotFound;
