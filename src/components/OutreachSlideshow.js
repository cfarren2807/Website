import React, { useState, useEffect } from "react";
import "./OutreachSlideshow.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Array of images (make sure the paths are correct)
const images = [
  "/assets/UKSEDS1.jpg",  // Assuming images are in the public folder
  "/assets/UKSEDS2.jpg",
  "/assets/UKSEDS3.jpg",
  "/assets/UKSEDS4.jpg",
];

// Array of texts corresponding to each image
const texts = [
  "Explore the Future of Space with UKSEDS",
  "Innovating in Space Technology",
  "StrathCube: Leading the Next Generation of Satellites",
  "Join Us for a New Era in Space Exploration",
];

const OutreachSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {/* Left arrow */}
      <FaChevronLeft className="arrow left" onClick={prevSlide} />

      {/* Image and Text */}
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Outreach Event ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
        <div className="text-container">
          {texts[currentIndex]}
        </div>
      </div>

      {/* Right arrow */}
      <FaChevronRight className="arrow right" onClick={nextSlide} />

      {/* Dots for slide navigation */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default OutreachSlideshow;
