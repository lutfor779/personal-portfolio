import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../../../images/lr3.png';

const About = () => {
    return (
        <div className="color2">
            <Container>
                <h1 className="text pt-5" id="about">About Me</h1>
                <Row xs={1} md={2} className="py-5 px-3 align-items-center text-white">
                    <Col>
                        <img src={profile} alt="profile img" className="img-fluid py-3" />
                    </Col>
                    <Col className="text-start">
                        <p>
                            <span style={{ fontSize: "2rem" }}>T</span>hanks for visiting my profile. I am a front-end website developer and mostly I am passionate on web coding. I’m quite comfortable in using ES6, React, Bootstrap, Node.js, MongoDB, Firebase, etc.
                        </p>
                        <p>
                            Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. Collaborative team player with excellent technical abilities.
                        </p>
                        <p>
                            Knowledgeable Front End Developer adept at creating successful websites that meet customer needs. Specializing in collaborating with all kinds of customers to gather requirements, produce plans and improve designs for usability and functionality.
                        </p>

                        <Link to="/public/Md_Lutfor_Rahman_Resume.pdf" target="_blank" download>
                            <button className="nav-btn">Download Resume</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;