import React, { useRef } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_USER_ID } from '../Config/config';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID,
            form.current, EMAIL_JS_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <Form
            ref={form}
            onSubmit={sendEmail}
            className="py-5 px-3 align-items-center">

            <FloatingLabel controlId="name" label="Name" className="mb-3">
                <Form.Control
                    type="text"
                    name="to_name"
                    required />
            </FloatingLabel>

            <FloatingLabel controlId="exampleForm.ControlInput1" label="Email" className="mb-3">
                <Form.Control
                    type="email"
                    name="from_name"
                    required />
            </FloatingLabel>

            <FloatingLabel controlId="exampleForm.ControlInput2" label="Phone" className="mb-3">
                <Form.Control
                    type="number"
                    name="from_phone"
                    required />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea1" label="Your message" className="mb-3">
                <Form.Control
                    as="textarea"
                    name="message"
                    style={{ height: '100px' }}
                    required
                />
            </FloatingLabel>

            <Button
                variant="outline-light"
                type="submit"
                className="px-5"
            >
                Send
            </Button>
        </Form>
    );
};

export default ContactForm;