import React from 'react';
import './Works.css';
import project1 from './images/Spotify.background.webp';
import project2 from './images/schedule.builder.webp';
import project3 from './images/social.mediablocker.jpeg';

function Projects() {
  const projects = [
    {
      name: 'Spotistats',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis elit at elit facilisis commodo. Nam nec lacinia odio, quis imperdiet tellus.',
      image: project1,
      link: 'https://spotistats-git-main-marliu123.vercel.app/'
    },
    {
      name: 'Schedule.io',
      description: 'Sed sit amet nibh at lorem pulvinar tempor. Donec euismod est nunc, id congue libero tempor id. Nulla facilisi. Suspendisse potenti. In hac habitasse platea dictumst.',
      image: project2,
      link: 'https://github.com/marliu123/schedule.io'
    },
    {
      name: 'Social Media Blocker',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur fermentum aliquet sem, eget tristique quam dictum at. Duis ac neque auctor, semper sapien vitae, aliquam libero.',
      image: project3,
      link: 'https://github.com/marliu123/Social-Media-Blocker'
    }
  ];

  return (
    <section id="works">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="overlay"></div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
