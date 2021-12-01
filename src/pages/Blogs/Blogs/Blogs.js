import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="fullHeight color1">
            <Container>
                <Row className="py-5">
                    <Col>
                        <img src="https://media3.giphy.com/media/8geiK2sEGcZrAGJr8s/giphy.gif?cid=6c09b952s74kx7k1k9dsfm2uhhgr55ocksidt4vhm0f7e14c&rid=giphy.gif&ct=ts" alt="Comming soon" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;