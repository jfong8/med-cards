import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function QuizPage() {
  return (
    <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Choose a Quiz Type
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          variant="contained"
          style={{ backgroundColor: '#001f3f', color: 'white', margin: '10px' }}
          size="medium"
          component={Link}
          to="/mc"
        >
          Multiple Choice
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#001f3f', color: 'white', margin: '10px' }}
          size="medium"
          component={Link}
          to="/fillblank"
        >
          Fill in the Blank
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#001f3f', color: 'white', margin: '10px' }}
          size="medium"
          component={Link}
          to="/truefalse"
        >
          True/False
        </Button>
      </div>
    </Container>
  );
}

export default QuizPage;
