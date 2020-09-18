import React from 'react';
import waves from '../../images/vacter.svg';
import waves2 from '../../images/vacter2.svg';
import { Jumbotron, Container } from 'react-bootstrap';
import Header from '../../components/Header';
import './styles.css';

export default function home() {
  return (
    <>
      <Header />
      <Jumbotron>
        <h1 className="title-h1">budget <br /> simulations for <br /> technology <br /> projects</h1>
      </Jumbotron>
      <img style={{ width: '100%' }} src={waves} alt="alt" />
      <Container style={{ background: '#d8c7ff' }} fluid>
        <div className="container">
          <h1 className="title-h2">budget <br /> simulations for <br /> technology <br /> projects</h1>
        </div>
      </Container>
      <img style={{ width: '100%', zIndex: '-1', position: 'relative', top: '-8px' }} src={waves2} alt="alt" />
    </>
  );
}