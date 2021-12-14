import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="pt-5 color2 text-white">
            <h1 className="highlight">Lutfor Rahman</h1>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                rel="noreferrer"
                className="text">lutor.rahman.dev@gmail.com</a><br />
            <p>Phone: 01793054198</p>
            <p className="mb-4">Address: Dhaka-1230, Bangladesh</p>
            <hr className="w-75 mx-auto" />
            <small>Copyright ©2021 All rights reserved | This template is made by Lutfor Rahman</small>
        </footer>
    );
};

export default Footer;