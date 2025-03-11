// src/components/Mission.js
import React from 'react';
import './Mission.css';

function Mission() {
  return (
    <section id="mission" className="card-section">
      <div className="card">
        <h2>Our Mission</h2>
        <p>
          STRATHcube is a 2 unit CubeSat with aims to 
          expand the available technologies for space 
          situational-awareness and re-entry
        </p>
        <p>
        The primary payload is a technology demonstration of Passive 
        Bistatic Radar for space debris detection whilst in orbit.
        </p>
        <p>
        The secondary mission analyses forces causing CubeSat solar array 
        fragmentation during re-entry.
        </p>
      </div>
    </section>
  );
}

export default Mission;


