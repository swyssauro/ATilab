import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi'
import './styles.css';

export default function Header() {
    return (
        <Container>
            <Navbar>
                <Navbar.Brand className="logo" href="/">aiTIa_</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Text>
                    <a className="sub-logo" href="/register">register</a>
                </Navbar.Text>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a className="button-i" href="/login"><FiUser color="d8c7ff" /></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}