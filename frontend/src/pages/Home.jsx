import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField } from '@mui/material';
import CardGrid from '../components/CardGrid';

function Home() {
  const [cardsData, setCardsData] = useState(undefined);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function getCardsData() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const response = await fetch('http://localhost:4000/api/cards', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const json = await response.json();
      setCardsData(json.cards);
    }
  }

  useEffect(() => {
    getCardsData();
  }, []);

  useEffect(() => {
    if (searchTerm !== '') {
      // eslint-disable-next-line arrow-body-style
      const filtered = cardsData.filter((card) => {
        return card.name.toLowerCase().includes(searchTerm.toLowerCase())
            || card.description.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(cardsData);
    }
  }, [searchTerm, cardsData]);

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    }}
    >
      <Typography variant="h4">
        Medical Flashcards
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData && (
        <CardGrid
          cardData={filteredData}
        />
      )}
    </Container>
  );
}

export default Home;
