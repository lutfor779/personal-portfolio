import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from '../../../images/lr2.png';
import './Intro.css';

const Intro = () => {
    return (
        <div className="color1 text-white" id="home">
            <Container>
                <Row xs={1} md={2} className="py-5 px-3 align-items-center">
                    <Col className="text-start" xs={{ order: 'last' }} md={{ order: 'first' }}>
                        <p className="text">WELCOME TO MY WORLD</p>
                        <h1>Hi, I'm <span className="highlight">LUTFOR RAHMAN</span></h1>
                        <h3>a <span className="highlight">Web Developer</span></h3>
                        <p>
                            I love to create Awesome website with more cleaner code. Knowledgeable in the user interface, testing, and
                            debugging process. I always provide error free, flat and creative design as user requirements.</p>
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