
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer"id='footer'>
      <div className="footer-container">

        <div className="footer-section about">
          <h3>Azad Limo NCC</h3>
          <p>
            We operate in Rome and its surroundings, offering car rental solutions with driver for transfers, events, and private tours.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Private Tours</h4>
          <ul>
            <li><a href="#">Rome</a></li>
            <li><a href="#">Tivoli</a></li>
            <li><a href="#">Florence</a></li>
            <li><a href="#">Naples</a></li>
            <li><a href="#">Amalfi Coast</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>Transfers</h4>
          <ul>
            <li><a href="#">Fiumicino</a></li>
            <li><a href="#">Ciampino</a></li>
            <li><a href="#">Civitavecchia</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Copyright 2020 - 2025 |
          Azad Limo NCC - Piazza Dei Navigatori 7, CAP 00147, ROME
          P.IVA - 17401231000
        </p>
      </div>
    </footer>
  );
};

export default Footer;
