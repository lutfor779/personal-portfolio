import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="fullHeight color1">
            <Container>
                <Row className="py-5 text-white">
                    <Col>
                        <img src="https://www.myphukettravel.com/assets/front-end/images/404.gif" alt="Not Found" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;