import React from 'react';

import './InfoBox.css';
import Container from 'react-bootstrap/Container';

const InfoBox = () => {
  return (
    <section className="info-box">
      <Container>
        <h2 class="center">UWAGA! KONGRES ZOSTAŁ ODWOŁANY.</h2>
        <p>
          Z uwagi na zaplanowane obrady tylko w wersji stacjonarnej oraz
          uwzględniając obecną sytuację epidemiczną i obowiązujące obostrzenia,
          Kongres został odwołany.
        </p>
      </Container>
    </section>
  );
};
export default InfoBox;
