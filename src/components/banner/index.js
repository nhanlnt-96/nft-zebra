import './Banner.scss';
import React from 'react';
import {Container} from 'react-bootstrap';

const Banner = () => {
  return (
      <Container fluid className="banner">
        <div className="banner-triangle__corner"></div>
        <Container fluid="xl" className="banner-container">

        </Container>
      </Container>
  );
};

export default Banner;