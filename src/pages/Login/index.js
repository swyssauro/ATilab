import React, { useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { FiCornerDownRight } from 'react-icons/fi';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        await api.post('/session', { email, password })
            .then(resp => {
                const { data } = resp
                console.log(data);
                
                if (data) {
                    localStorage.setItem('crypto', data.crypto);
                    localStorage.setItem('nome', data.nome);
                    history.push('/profile');
                }
            });
    }

    return (
        <>
            <Header />
            <Container className="c-bacg">
                <Row>
                    <Col xs="5"><h1 className="title-h1">Faça login<br /> para criar  <br /> orçamento</h1></Col>
                    <Col className="modcol-2">
                        <form autocomplete="off" onSubmit={handleSubmit}>
                            <TextField
                                className="fild-ani1"
                                id="outlined-required"
                                label="email"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                variant="outlined"
                            />
                            <TextField
                                className="fild-ani2"
                                type="password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                id="outlined-required"
                                label="password"
                                variant="outlined"
                            />
                            <br />
                            <button className="button-submit" type="submit"><FiCornerDownRight color="#e54848" size="25" /></button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}