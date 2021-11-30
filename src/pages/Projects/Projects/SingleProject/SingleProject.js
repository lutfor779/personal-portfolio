import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleProject = ({ project }) => {
    const { id, name, img, detail1 } = project;

    const navigate = useNavigate();
    const handleDetail = id => {
        navigate(`/project/${id}`);
    }

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} height="450px" />
                <Card.ImgOverlay>
                    <Card.Title className="mt-5">{name}</Card.Title>
                    <Card.Text>{detail1}</Card.Text>
                    <br />
                    <Button
                        variant="outline-light"
                        onClick={() => handleDetail(id)}
                        size="sm">
                        Details
                    </Button>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default SingleProject;