import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <div className="color1">
            <Container>
                <h1 className="text pt-5">Contact Me</h1>
                <p className="text-white">I like to create interactive website with fun, Open minded people. Feel free to contact with me</p>
                <ContactForm />
            </Container>
        </div>
    );
};

export default Contact;