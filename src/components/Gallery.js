import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  // Array of images and their descriptions
  const images = [
    {
      src: "assets/UKSEDS1.jpg",
      alt: "Satellite in space",
      description: "Description 1."
    },
    {
      src: "assets/UKSEDS2.jpg",
      alt: "CubeSat launch",
      description: "Description 2"
    },
    {
      src: "assets/UKSEDS3.jpg",
      alt: "Team working on CubeSat",
      description: "Description 3"
    },
    {
      src: "assets/UKSEDS4.jpg",
      alt: "View of Earth from space",
      description: "Description 4"
    }
  ];

  // State to manage the hovered image's description
  const [hoveredDescription, setHoveredDescription] = useState(null);

  // Function to handle hover on an image
  const handleMouseEnter = (description) => {
    setHoveredDescription(description);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredDescription(null);
  };

  return (
    <section className="gallery">
      <h2>Mission Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onMouseEnter={() => handleMouseEnter(image.description)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Show description below the images on hover */}
      {hoveredDescription && (
        <div className="description">
          <p>{hoveredDescription}</p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
