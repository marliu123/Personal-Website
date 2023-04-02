import React, { useState } from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { faRProject } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import computer from './images/computer.png';

function Skills() {
    const languages = [
      { name: 'JavaScript', icon: faJs },
      { name: 'React', icon: faReact },
      { name: 'R', icon: faRProject },
      { name: 'Python', icon: faPython },
      { name: 'Java', icon: faJava },
      { name: 'C++', icon: faCode },
      { name: 'SQL', icon: faDatabase },
      { name: 'MongoDB', icon: faLeaf },
      { name: 'Excel', icon: faFileExcel },
    ];
  
    const [hovered, setHovered] = useState(null);
  
    return (
        <div>
          <section id="skills">
            <h2>Languages</h2>
            <div className="skills-container">
              <div className="skill-circle">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className={`skill-item ${hovered === index ? 'hovered' : ''}`}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="skill-item1">
                      <FontAwesomeIcon icon={language.icon} size="3x" />
                      {hovered === index && <span className="skill-name">{language.name}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <img src={computer} alt="computer" className="computer" />
            </div>
          </section>
        </div>
      );
}      

export default Skills;

