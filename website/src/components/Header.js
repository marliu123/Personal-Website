import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="home" spy={true} smooth={true}>Home</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true}>About</Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true}>Skills</Link>
          </li>
          <li>
            <Link to="introduction" spy={true} smooth={true}>Introduction</Link>
          </li>
          <li>
            <Link to="works" spy={true} smooth={true}>Works</Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true}>Contact Me</Link>
          </li>
        </ul>
        <div className="clock">{time.toLocaleString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', hour12: true })}</div>
      </nav>
    </header>
  );
}

export default Header;
