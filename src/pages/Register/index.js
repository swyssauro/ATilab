import React from 'react';
import Header from '../../components/Header';
import FormRegister from '../../components/Form_register';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

export default function Register() {
    return (
        <>
            <Header />
            <Container className="c-bacg">
                <Row>
                    <Col xs="5"><h1 className="title-h1">Faça seu<br />registro <br />  Fácil  &Rápido </h1></Col>
                    <Col className="modcol-2">
                        <FormRegister />
                    </Col>
                </Row>
            </Container>
        </>
    );
}