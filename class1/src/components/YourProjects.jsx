import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import '../styles/YourProjects.css';

const YourProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getProjects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="your-projects-container">
      <h1 className="project-title">
            <span className="project-highlight">Your </span>Projects
          </h1>
      {projects.map((project) => (
        <div key={project._id} className="project-item" data-aos='zoom-in-up'>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default YourProjects;
