import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FillBlank() {
  const [isCorrect1, setIsCorrect1] = useState(null);
  const [userAnswer1, setUserAnswer1] = useState('');
  const [isCorrect2, setIsCorrect2] = useState(null);
  const [userAnswer2, setUserAnswer2] = useState('');
  const [isCorrect3, setIsCorrect3] = useState(null);
  const [userAnswer3, setUserAnswer3] = useState('');

  const handleUserAnswerChange1 = (event) => {
    setUserAnswer1(event.target.value);
  };

  const handleUserAnswerChange2 = (event) => {
    setUserAnswer2(event.target.value);
  };

  const handleUserAnswerChange3 = (event) => {
    setUserAnswer3(event.target.value);
  };

  const checkUserAnswer = (userAnswer, correctAnswer, setIsCorrect) => {
    setIsCorrect(userAnswer.toLowerCase() === correctAnswer.toLowerCase());
  };

  return (
    <Box p={4}>
      <Typography variant="h4" mb={4}>
        Fill in the Blank
      </Typography>

      <Box mb={4}>
        <Typography paragraph mb={2}>
          Fill in the blank: ____ are the small bones that make up the fingers and toes.
          They are responsible for the intricate movements of these extremities and are crucial
          for tasks that require dexterity and fine motor skills,
          such as typing, gripping, and playing musical instruments.
        </Typography>
        <TextField
          label="Answer"
          variant="outlined"
          value={userAnswer1}
          onChange={handleUserAnswerChange1}
          mb={2}
        />
        <Button variant="contained" onClick={() => checkUserAnswer(userAnswer1, 'phalanges', setIsCorrect1)}>
          Check
        </Button>
        {isCorrect1 !== null && (
          <Typography mt={2}>{isCorrect1 ? 'Correct!' : 'Incorrect!'}</Typography>
        )}
      </Box>

      <Box mb={4}>
        <Typography paragraph mb={2}>
          Fill in the blank: The ____ is a sigmoid-shaped long bone with a convex surface along
          its medial end when observed from the cephalad position.
          It serves as a connection between the axial and appendicular skeleton
          in conjunction with the scapula, and each of these structures forms the pectoral girdle.
          Though not as large as other supporting structures in the body, clavicular attachments
          allow for significant function and range of motion of the upper extremity as well as
          protection of neurovascular structures posteriorly. Each part of this long bone has
          a purpose in regards to its attachments that affects the overall physiology of the
          pectoral girdle.
        </Typography>
        <TextField
          label="Answer"
          variant="outlined"
          value={userAnswer2}
          onChange={handleUserAnswerChange2}
          mb={2}
        />
        <Button variant="contained" onClick={() => checkUserAnswer(userAnswer2, 'clavicle', setIsCorrect2)}>
          Check
        </Button>
        {isCorrect2 !== null && (
          <Typography mt={2}>{isCorrect2 ? 'Correct!' : 'Incorrect!'}</Typography>
        )}
      </Box>
      <Box mb={4}>
        <Typography paragraph mb={2}>
          Fill in the blank: The ____ is the largest bone of the upper extremity and defines the
          human brachium (arm). It articulates proximally with the glenoid via the glenohumeral (GH)
          joint and distally with the radius and ulna at the elbow joint. The most proximal portion
          of the ____ is the head of the ____, which forms a ball and socket joint with the glenoid
          cavity on the scapula.
        </Typography>
        <TextField
          label="Answer"
          variant="outlined"
          value={userAnswer3}
          onChange={handleUserAnswerChange3}
          mb={2}
        />
        <Button variant="contained" onClick={() => checkUserAnswer(userAnswer3, 'humerus', setIsCorrect3)}>
          Check
        </Button>
        {isCorrect3 !== null && (
          <Typography mt={2}>{isCorrect3 ? 'Correct!' : 'Incorrect!'}</Typography>
        )}
      </Box>
    </Box>
  );
}

export default FillBlank;
