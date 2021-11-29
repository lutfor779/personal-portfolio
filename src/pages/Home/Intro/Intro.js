import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from '../../../images/lr.png';
import './Intro.css';

const Intro = () => {
    return (
        <div className="color1 text-white">
            <Container>
                <Row xs={1} md={2} className="py-5 px-3 align-items-center">
                    <Col className="text-start" xs={{ order: 'last' }} md={{ order: 'first' }}>
                        <p>WELCOME TO MY WORLD</p>
                        <h1>Hi, I'm <span>LUTFOR RAHMAN</span></h1>
                        <h3>a Web Developer</h3>
                        <p>Hello and thanks for visiting my profile. I am a front-end website developer and mostly I am passionate on web coding. I’m quite comfortable in using ES6, React, Bootstrap, Node.js, MongoDB, Firebase, etc.</p>
                    </Col>
                    <Col xs={{ order: 'first' }} md={{ order: 'last' }}>
                        <img src={profile} alt="profile img" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Intro;