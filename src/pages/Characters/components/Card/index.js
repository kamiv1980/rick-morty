import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const CardCharacter = ({ item, handleModalData }) => {
  return (
    <Card sx={{ maxWidth: 300 }} onClick={handleModalData(item)}>
      <CardActionArea>
        <CardMedia component="img" height="280" image={item.image} alt={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
