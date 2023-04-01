import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resume from './documents/resume1.docx';
import './Home.css';
import profilePic from './images/selfie.png';


function Home() {
  const [typingText, setTypingText] = useState('Front-End Developer');

  useEffect(() => {
    const texts = ['Web Designer', 'React Developer', 'Student', 'Bubble Tea Enthusiast'];
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setTypingText(texts[currentIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home">
      <div className="home-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Marcus Liu</h1>
        <div className="typing-container">
          <span class="typing-text">{typingText}</span>
        </div>
        <div className="social-links">
          <a href="https://github.com/marliu123"><FaGithub /></a>
          <a href="https://linkedin.com/in/marcus-liu-mcl"><FaLinkedin /></a>
        </div>
        <a href={resume} download className="resume-link">Download Resume</a>
      </div>
    </section>
  );
}

export default Home;

