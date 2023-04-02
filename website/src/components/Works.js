import React from 'react';
import './Works.css';
import project1 from './images/Spotify.background.webp';
import project2 from './images/schedule.builder.webp';
import project3 from './images/social.mediablocker.jpeg';

function Projects() {
  const projects = [
    {
      name: 'Spotistats',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more',
      image: project1,
      link: 'https://spotistats-git-main-marliu123.vercel.app/'
    },
    {
      name: 'Schedule.io',
      description: 'A web application that automates the creation of schedules tailored to individual needs',
      image: project2,
      link: 'https://github.com/marliu123/schedule.io'
    },
    {
      name: 'Social Media Blocker',
      description: 'A Google Chrome Extension used to block certain distracting websites and increase productivity during work and study sessions',
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
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
