import React, { useState } from 'react';

const AddProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding project logic here
    console.log('Project added:', { title, description, link });
    setTitle('');
    setDescription('');
    setLink('');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="add-project-container">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Project Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="url" placeholder="Project Link" value={link} onChange={(e) => setLink(e.target.value)} required />
        <button type="submit">Add Project</button>
      </form>
      {showPopup && <div className="popup">Project added successfully!</div>}
    </div>
  );
};

export default AddProject;
