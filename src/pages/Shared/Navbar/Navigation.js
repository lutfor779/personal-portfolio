import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../../images/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0c0845" }} variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        style={{ transform: "scale(1.8)" }}
                    />{' '}
                    Lutfor Rahman
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="projects">Projects</Nav.Link>
                        <Nav.Link href="#price">Pricing</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <a href="https://drive.google.com/file/d/18b6KTrb3fTtyDcACYpww3xH98xGZiqjV/view?usp=sharing" target="_blank" rel="noreferrer">
                            <button className="nav-btn">Resume</button>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;