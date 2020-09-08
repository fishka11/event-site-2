import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import Meta from '../components/Meta';

import './Register.css';

const Register = ({ eventSiteMenu, currentEvent, path }) => {
  return (
    <div className="page register">
      <Meta eventSiteMenu={eventSiteMenu} path={path} />
      <Container>
        <h1>Zarejestruj się</h1>
      </Container>
      <section>
        <Container>
          <iframe
            src={`https://www.ksoin.pl/${currentEvent}-rejestracja/`}
            marginWidth="0"
            marginHeight="0"
            width="100%"
            height="2500px"
            frameBorder="0"
            title="Formularz rejestracyjny"
          />
        </Container>
      </section>
    </div>
  );
};

Register.propTypes = {
  eventSiteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  path: PropTypes.string.isRequired,
  currentEvent: PropTypes.string,
};

Register.defaultProps = {
  eventSiteMenu: [],
  currentEvent: '',
};

export default Register;
