import React from "react";
import '../styles/Cards.css'; // Import the CSS file

function Cards() {
  return (
    <div className="card-container">
      <a href="#" className="card">
        <img className="card-image" src="/Abishek.jpg" alt="Abishek Madhavan" />
        <div className="card-content">
          <h5 className="card-title">Abishek Madhavan</h5>
          <h2 className="card-subtitle">Chief Executive Officer</h2>
          <p className="card-text">
            Hello, this is Abishek. I am working as CEO to build an enormous website to help students manage their projects.
          </p>
        </div>
      </a>
      <a href="#" className="card">
        <img className="card-image" src="/siva1.png" alt="Sivasurya" />
        <div className="card-content">
          <h5 className="card-title">Sivasurya</h5>
          <h2 className="card-subtitle">Chief Technology Officer</h2>
          <p className="card-text">
            Hello, this is Sivasurya. I am working as CTO to build an enormous website to help students manage their projects.
          </p>
        </div>
      </a>
    </div>
  );
}

export default Cards;
