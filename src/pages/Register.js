import React from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';

import './Register.css';

const Register = (props) => {
  const { meta, currentEvent } = props;
  return (
    <div className='page register'>
      <Helmet>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description}></meta>
      </Helmet>
      <Container>
        <h1>Zarejestruj się</h1>
      </Container>
      <section>
        <Container>
          <iframe
            src={`https://www.ksoin.pl/${currentEvent}-rejestracja/`}
            marginWidth='0'
            marginHeight='0'
            width='100%'
            height='2500px'
            frameBorder='0'
            title='Formularz rejestracyjny'
          ></iframe>
        </Container>
      </section>
    </div>
  );
};

export default Register;
