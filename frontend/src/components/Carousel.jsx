import React, { useState } from 'react';
import './Carousel.css';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardInfo = [
    {
      id: uuidv4(),
      name: 'Femur',
      description: 'The bone of the thigh or upper hind limb, articulating at the hip and the knee',
      image: 'https://cdn.britannica.com/92/99192-050-52E7AB99/view-femur.jpg',
    },
    {
      id: uuidv4(),
      name: 'Tibia',
      description: 'The tibia, also known as the shinbone or shankbone, is the larger, stronger, and anterior of the two bones in the leg below the knee in vertebrates; it connects the knee with the ankle',
      image: 'https://cdn.britannica.com/05/99105-120-6738BAE9/view-bones-leg-tibia-fibula.jpg',
    },
    {
      id: uuidv4(),
      name: 'Scapula',
      description: 'The scapula, also known as the shoulder blade, is the bone that connects the humerus with the clavicle.',
      image: 'https://cdn.britannica.com/06/99106-050-CE6AFD10/view-bones-shoulder-humerus-scapula-clavicle.jpg',
    },
  ];

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? cardInfo.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === cardInfo.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="app-c">
      <button
        type="button"
        className="nav-btn"
        onClick={previousImage}
      >
        Prev
      </button>
      {/* where each flashcard is located */}
      <div>
        <Card
          name={cardInfo[currentImageIndex].name}
          description={cardInfo[currentImageIndex].description}
          image={cardInfo[currentImageIndex].image}
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
