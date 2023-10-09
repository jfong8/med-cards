import React, { useState } from 'react';
import './carousel.css';
import logo from '../reactlogo.png';
import logo2 from '../reactlogo2.png';

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      id: 1,
      source: logo,
    },
    {
      id: 2,
      source: logo2,
    },
  ];

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="AppC">
      <button
        type="button"
        className="nav-btn"
        onClick={previousImage}
      >
        Prev
      </button>
      <div className="image-container">
        <img
          className="image"
          alt="sliderImage"
          src={images[currentImageIndex].source}
        />
      </div>
      <button
        type="button"
        className="nav-btn"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
