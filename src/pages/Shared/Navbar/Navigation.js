import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from './../../../images/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar sticky='top'
            collapseOnSelect
            expand="md"
            style={{ backgroundColor: "#0c0845" }}
            variant="dark">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
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
                        <Nav.Link as={HashLink} to="home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="projects">Projects</Nav.Link>
                        <Nav.Link as={HashLink} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={HashLink} to="home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="contact">Contact</Nav.Link>
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