import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function MediaCard() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%">
      <Card 
        sx={{
          width: { xs: '90%', sm: '60%', md: '345px' }, 
          boxShadow: 3, 
          mx: "auto" 
        }}
      >
        <CardMedia
          sx={{ height: { xs: 100, sm: 140 } }}
          image="https://png.pngtree.com/background/20230618/original/pngtree-low-poly-nature-landscape-a-stunning-3d-render-picture-image_3750140.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, 
            ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
