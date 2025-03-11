// src/components/Team.js
import React from 'react';
import './Team.css';

import { Link } from "react-router-dom"; 


function Team() {
  return (
    <section id="team">
      <h2>Meet the Team</h2>
      <div className="team-container">
        <div className="team-card">
          <div className="card-front">
            <img src="https://via.placeholder.com/120" alt="Team Member 1" />
            <h3>Farboud Foroughi</h3>
            <p>Society Lead</p>
          </div>
          <div className="card-back">
            <p>Expert in satellite communication systems and embedded software development.</p>
          </div>
        </div>
        <div className="team-card">
          <div className="card-front">
            <img src="https://via.placeholder.com/120" alt="Team Member 2" />
            <h3>Freya Groves</h3>
            <p>Project Manager/EPS</p>
          </div>
          <div className="card-back">
            <p>Experienced project manager with a passion for space science and teamwork.</p>
          </div>
        </div>
        <div className="team-card">
          <div className="card-front">
            <img src="https://via.placeholder.com/120" alt="Team Member 3" />
            <h3>Hannah Douglas</h3>
            <p>Project Manager/Thermal</p>
          </div>
          <div className="card-back">
            <p>Specializing in software architecture and cloud systems for satellite missions.</p>
          </div>
        </div>
        <div className="team-card">
          <div className="card-front">
            <img src="https://via.placeholder.com/120" alt="Team Member 3" />
            <h3>STRATHcube</h3>
            <p>Meet the rest of the team</p>
          </div>
          <div className="card-back">
            <p><Link to="/team">Click here to learn more about our amazing team members</Link></p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Team;


