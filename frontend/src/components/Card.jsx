import * as React from 'react';
import MUICard from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

// Card component that takes in name, description, and image as properties
function Card(props) {
  const { name, description, image } = props;
  return (
    <MUICard sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            image={image}
          />
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
}

// Defines proptypes for card component, ensuring correct data types are passed to CardComponent
Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
