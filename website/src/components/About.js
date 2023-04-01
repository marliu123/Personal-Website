import React from 'react';
import './About.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hi there! My name is Marcus Liu and I am a Front-End Developer based in New York City.</p>
            <p>I specialize in building responsive and user-friendly web applications using modern technologies such as React, Redux, and Node.js.</p>
          </div>
          <div className="about-contact">
            <h3>Contact Me</h3>
            <div className="contact-item">
              <FaPhone />
              <a href="tel:1234567890">123-456-7890</a>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:marcus.c.liu@gmail.com">marcus.c.liu@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
