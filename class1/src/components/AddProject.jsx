import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddProject.css'; // Import the CSS file

const AddProject = () => {
  const [title, setTitle] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/addProject', { title, selectedOption, description, link });
      setTitle('');
      setSelectedOption('');
      setDescription('');
      setLink('');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleViewProjects = () => {
    navigate('/landing');
  };

  const domains = [
    'Web Development',
    'Mobile App Development',
    'Data Science',
    'Machine Learning',
    'Artificial Intelligence',
    'Cybersecurity',
    'Blockchain',
    'Internet of Things (IoT)',
    'Cloud Computing',
    'Game Development',
    'DevOps',
    'Augmented Reality (AR)',
    'Virtual Reality (VR)',
    'E-commerce',
    'Healthcare Technology',
    'Education Technology',
    'Financial Technology (FinTech)',
    'Robotics',
    'Big Data',
    'Computer Vision'
  ];

  return (
    <section className="add-project-section">
      <div className="add-project-container">
        <h2 className="add-project-title">Add Project</h2>
        <form onSubmit={handleSubmit} className="add-project-form">
          <div>
            <label htmlFor="title" className="add-project-label">Project Title</label>
            <input
              type="text"
              id="title"
              className="add-project-input"
              placeholder="Enter project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="domains" className="add-project-label">Domain</label>
            <select
              id="domains"
              className="add-project-input"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              required
            >
              <option value="" disabled>Select a domain</option>
              {domains.map((domain, index) => (
                <option key={index} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description" className="add-project-label">Project Description</label>
            <textarea
              id="description"
              rows="4"
              className="add-project-textarea"
              placeholder="Enter project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="link" className="add-project-label">Project Link</label>
            <input
              type="url"
              id="link"
              className="add-project-input"
              placeholder="Enter project link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-between'>
          <button type="submit" className="add-project-button">Add Project</button>
          <button onClick={handleViewProjects} className="view-projects-button">View Your Projects</button>
          </div>
        </form>
        
        {showPopup && <div className="popup">Project added successfully!</div>}
      </div>
    </section>
  );
};

export default AddProject;
