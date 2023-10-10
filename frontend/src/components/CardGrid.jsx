import * as React from 'react';
import {
  Grid, Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

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

function CardGrid() {
  return (
    <Grid container spacing={4} justifyContent="center">
      {
        cardInfo.map((card) => (
          // ------------------------------------
          // This can be a good blueprint for our card component
          <Grid item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <CardMedia
                    component="img"
                    image={card.image}
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    {card.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          // From the MUI Card API - https://mui.com/material-ui/react-card/#primary-action
          // --------------------------------------
        ))
      }
    </Grid>
  );
}

export default CardGrid;
