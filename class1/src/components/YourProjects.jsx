import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './YourProjects.css';

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

  return (
    <div className="your-projects-container">
      <h2>Your Projects</h2>
      {projects.map((project) => (
        <div key={project._id} className="project-item">
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
