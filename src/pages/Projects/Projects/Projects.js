import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from './../../../images/projects-banner/projects1.png';
import img2 from './../../../images/projects-banner/projects2.png'; import img3 from './../../../images/projects-banner/projects3.png';
import './Projects.css';
const Projects = () => {
    return (
        <div className="color2">
            <Container>
                <h1 className="text-white pt-5">Here are some projects sample</h1>
                <Row xs={1} md={2} lg={3} className="g-4 py-5 px-3 align-items-center">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} height="450px" />
                            <Card.ImgOverlay>
                                <Card.Title>Mobile House</Card.Title>
                                <Card.Text>
                                    User can explore, order, manage order and has an option to give or view others
                                    feedback
                                </Card.Text>
                                <small><button className="card-btn mt-5">Details</button></small>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={img2} height="450px" />
                            <Card.ImgOverlay>
                                <Card.Title>LR Travel Agency</Card.Title>
                                <Card.Text>
                                    Without logging in, the user can just explore and see package details but can't book a
                                    package
                                </Card.Text>
                                <small><button className="card-btn mt-5">Details</button></small>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img3} height="450px" />
                            <Card.ImgOverlay>
                                <Card.Title>Health Care</Card.Title>
                                <Card.Text>
                                    Implement registration, login system using email and password, Gmail & Github
                                    account
                                </Card.Text>
                                <small><button className="card-btn mt-5">Details</button></small>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;