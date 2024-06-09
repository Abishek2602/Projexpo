import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddProject.css';

const AddProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/addProject', { title, description, link });
      setTitle('');
      setDescription('');
      setLink('');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleViewProjects = () => {
    navigate('/your-projects');
  };

  return (
    <div className="add-project-container">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button type="submit">Add Project</button>
      </form>
      <button onClick={handleViewProjects} className="view-projects-button">View Your Projects</button>
      {showPopup && <div className="popup">Project added successfully!</div>}
    </div>
  );
};

export default AddProject;
