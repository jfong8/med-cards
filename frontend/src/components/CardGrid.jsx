import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Card from './Card';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

function CardGrid(props) {
  const { cardData } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filteredCards = cardData.filter((card) => card.name.toLowerCase()
    .includes(debouncedSearchTerm.toLowerCase()));

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Grid container spacing={4} justifyContent="center">
        {filteredCards.map((card) => (
          <Grid item key={card.id}>
            <Card
              name={card.name}
              description={card.description}
              image={card.fileName}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

CardGrid.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CardGrid;
