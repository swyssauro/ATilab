import React from 'react';
import { FiPower, FiArrowDownRight } from 'react-icons/fi';
import { Container, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ListaOrçam from '../../components/Lista_orçam';
import Header from '../../components/Header';
import './styles.css';

export default function Profile() {
    const nome = localStorage.getItem('nome');
    const history = useHistory();

    function handleLogout() {
        localStorage.clear()
        history.push('/login');
    }

    function handleOrç() {
        history.push('/orcamentos');
        history.go();
    }

    return (
        <>
            <Header />
            <Container className="c-bacg">
                <Row>
                    <Col xs="5"><h1 className="title-h1">Hey, {nome} <br />seu historico de <br /> orçamentos</h1>
                        <button className="button-lix" onClick={handleLogout} type="button"><FiPower size={25} color="#f44336" /></button><br />
                        <button style={{ marginBlockStart: '8px' }} className="button-lix" onClick={handleOrç} type="button"><FiArrowDownRight size={25} color="#f44336" /></button>
                        <hr />
                    </Col>
                    <Col className="modcol-2">
                        <ListaOrçam />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
