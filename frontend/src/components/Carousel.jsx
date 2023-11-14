import React, { useState } from 'react';
import './Carousel.css';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';
import Card from './Card';

function Carousel(props) {
  const { cardData } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? cardData.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === cardData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="app-c">
      <IconButton
        type="button"
        className="nav-btn"
        onClick={previousImage}
        sx={{ backgroundColor: 'grey', borderRadius: 0 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <div>
        <Card
          name={cardData[currentImageIndex].name}
          description={cardData[currentImageIndex].description}
          image={cardData[currentImageIndex].fileName}
        />
      </div>
      <IconButton
        type="button"
        className="nav-btn"
        onClick={nextImage}
        sx={{ backgroundColor: 'grey', borderRadius: 0 }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}

Carousel.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Carousel;
