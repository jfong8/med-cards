import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Card from './Card';

function CardGrid(props) {
  const { cardData } = props;

  return (
    <div>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card) => (
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
