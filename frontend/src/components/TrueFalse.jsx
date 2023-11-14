import React, { useState } from 'react';
import { Button, Typography, Container } from '@mui/material';

function TrueFalse() {
  const [feedback1, setFeedback1] = useState(null);
  const [feedback2, setFeedback2] = useState(null);
  const [feedback3, setFeedback3] = useState(null);
  const [feedback4, setFeedback4] = useState(null);

  const handleClickCorrect = (setFeedback) => () => {
    setFeedback('Correct!');
  };

  const handleClickIncorrect = (setFeedback) => () => {
    setFeedback('Incorrect!');
  };

  return (
    <div>
      <Container maxWidth="md" className="quiz-container">
        <Typography variant="h5" gutterBottom>
          Question 1
        </Typography>
        <Container className="quiz-content">
          The skull&apos;s purpose to protect the brain and allow
          attachments for the facial muscles.
          <div className="centered-buttons">
            <Button
              variant="contained"
              style={{ backgroundColor: '#001f3f', color: 'white', margin: '2px' }}
              size="small"
              onClick={handleClickCorrect(setFeedback1)}
            >
              True
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: '#001f3f', color: 'white', margin: '2px' }}
              size="small"
              onClick={handleClickIncorrect(setFeedback1)}
            >
              False
            </Button>
          </div>
          {feedback1 && (
            <Typography variant="body1" className="centered-text">
              {feedback1}
            </Typography>
          )}
        </Container>
      </Container>

      <div style={{ marginBottom: '20px' }} />

      <Container maxWidth="md" className="quiz-container">
        <Typography variant="h5" gutterBottom>
          Question 2
        </Typography>
        <Container className="quiz-content">
          The ribs can be classified as true, false, or floating ribs.
          <div className="centered-buttons">
            <Button
              variant="contained"
              style={{ backgroundColor: '#001f3f', color: 'white', margin: '2px' }}
              size="small"
              onClick={handleClickCorrect(setFeedback3)}
            >
              True
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: '#001f3f', color: 'white', margin: '2px' }}
              size="small"
              onClick={handleClickIncorrect(setFeedback3)}
            >
              False
            </Button>
          </div>
          {feedback3 && (
            <Typography variant="body1" className="centered-text">
              {feedback3}
            </Typography>
          )}
        </Container>
      </Container>

      <div style={{ marginBottom: '20px' }} />

      <Container maxWidth="md" className="quiz-container">
        <Typography variant="h5" gutterBottom>
          Question 3
        </Typography>
        <Container className="quiz-content">
          The pelvis forms a protective ring around the upper abdominal organs.
          <div className="centered-buttons">
            <Button
              variant="contained"
              style={{ backgroundColor: '#001f3f', color: 'white', margin: '2px' }}
              size="small"
              onClick={handleClickIncorrect(setFeedback2)}
            >
              True
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: '#001f3f', color: 'white', margin: '2px' }}
              size="small"
              onClick={handleClickCorrect(setFeedback2)}
            >
              False
            </Button>
          </div>
          {feedback2 && (
            <Typography variant="body1" className="centered-text">
              {feedback2}
            </Typography>
          )}
        </Container>
      </Container>

      <div style={{ marginBottom: '20px' }} />

      <Container maxWidth="md" className="quiz-container">
        <Typography variant="h5" gutterBottom>
          Question 4
        </Typography>
        <Container className="quiz-content">
          The tibia is the larger and weight-bearing bone, while the
          fibula is a thinner bone that runs alongside it.
          <div className="centered-buttons">
            <Button
              variant="contained"
              style={{ backgroundColor: '#001f3f', color: 'white', margin: '2px' }}
              size="small"
              onClick={handleClickCorrect(setFeedback4)}
            >
              True
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: '#001f3f', color: 'white', margin: '2px' }}
              size="small"
              onClick={handleClickIncorrect(setFeedback4)}
            >
              False
            </Button>
          </div>
          {feedback4 && (
            <Typography variant="body1" className="centered-text">
              {feedback4}
            </Typography>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default TrueFalse;
