import React from 'react';
import './About.css';

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
        </div>
      </div>
    </section>
  );
}

export default About;
