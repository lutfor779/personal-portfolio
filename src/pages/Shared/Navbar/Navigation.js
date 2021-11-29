import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../../images/logo.png';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0c0845" }} variant="dark">
            <Container>
                <Navbar.Brand href="#">
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#price">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;