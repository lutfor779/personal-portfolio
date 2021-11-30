import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Project = () => {
    const projectId = useParams();
    const id = projectId.projectId;

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("./../fakeDB.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const targetProject = projects.find(project => project.id === id)

    return (
        <div className="color1">
            <Container>
                <h1 className="highlight pt-5">{targetProject?.name}</h1>
                <div className="pt-3 pb-5">
                    <a href={targetProject?.live} target="_blank" rel="noreferrer">
                        <Button variant="success" size="sm">
                            Live Site
                        </Button>
                    </a>
                    <a href={targetProject?.client}
                        className="mx-3"
                        target="_blank"
                        rel="noreferrer">
                        <Button variant="outline-warning"
                            size="sm"
                            className="mx-10px">
                            Client
                        </Button>
                    </a>
                    {
                        targetProject?.server && <a href={targetProject?.server} target="_blank" rel="noreferrer">
                            <Button variant="outline-warning" size="sm">
                                Server
                            </Button>
                        </a>
                    }
                </div>

                <div className="pb-5">
                    <Card className="p-3">
                        <Row className="g-0 align-items-center">
                            <Col md={7} xxl={8}>
                                <Card.Header as="h4">Screenshots</Card.Header>
                                <Row xs={1} md={2} xxl={3} className="g-3">
                                    <Col>
                                        <Card.Img src={targetProject?.img1} height="350px" alt="img1" />
                                    </Col>
                                    <Col>
                                        <Card.Img src={targetProject?.img2} height="350px" alt="img2" />
                                    </Col>
                                    <Col>
                                        <Card.Img src={targetProject?.img3} height="350px" alt="img3" />
                                    </Col>
                                    <Col>
                                        <Card.Img src={targetProject?.img4} height="350px" alt="img4" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={5} xxl={4}>
                                <Card.Header as="h3" className="text">Details</Card.Header>
                                <Card.Body>
                                    <ul className="text-start mb-5">
                                        <li>{targetProject?.detail1}</li>
                                        <li>{targetProject?.detail2}</li>
                                        <li>{targetProject?.detail3}</li>
                                    </ul>
                                    <Card.Text>
                                        <span className="text fs-3 d-block">Technologies</span>
                                        <br />
                                        <span className="text-start d-block ps-4" >{targetProject?.technologies}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Project;