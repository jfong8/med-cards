import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Container } from '@mui/material';
import CardGrid from './CardGrid';
import Carousel from './Carousel';
import './Quiz.css';

function Quiz(props) {
  const { cardData } = props;
  const [feedback, setFeedback] = useState(null);

  const handleYesClick = () => {
    setFeedback('Correct!');
  };

  const handleNoClick = () => {
    setFeedback('Incorrect!');
  };

  return (
    <Container maxWidth="md" className="quiz-container">
      <Typography variant="h4" align="center" gutterBottom>
        Quiz
      </Typography>
      <Container className="quiz-content">
        <Typography variant="body1" align="center" paragraph>
          Is this definition correct?
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Skull
        </Typography>
        <Typography variant="body2" align="center" paragraph>
          The skull is anterior to the spinal column and is the bony structure
          that encases the brain. Its purpose is to protect the brain and allow
          attachments for the facial muscles. The two regions of the skull are
          the cranial and facial region. The cranial portion is the part of the
          skull that directly houses the brain and the facial portion includes
          the rest of the bones of the skull.
        </Typography>
        <div className="centered-buttons">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleYesClick}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleNoClick}
          >
            No
          </Button>
        </div>
        {feedback && (
          <Typography variant="body1" align="center" className="centered-text">
            {feedback}
          </Typography>
        )}
      </Container>
      {feedback && (
        <Container maxWidth="md" className="centered-content">
          {feedback === 'Correct!' && <CardGrid cardData={cardData} />}
          {feedback === 'Incorrect!' && <Carousel cardData={cardData} />}
        </Container>
      )}
    </Container>
  );
}

Quiz.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Quiz;
