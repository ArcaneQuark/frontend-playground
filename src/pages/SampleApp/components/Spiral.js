import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';


export default function Spiral() {
  return (
    <Card>
      <CardActionArea href='https://www.youtube.com/watch?v=pCpLWbHVNhk'>
        <CardMedia
          component='img'
          image='/static/images/spiral.jpeg'
          title='The Twisting Deceit'
        />
        <CardContent>
          <Typography paragraph variant='h1' color='green'>MAG 3.141592653589793238462 </Typography>
          <Box display='flex' justifyContent='flex-start'>
            <Typography component='span' variant='subtitle1'>Statement of Michael/Helen Distortion, Regarding Mandelbrot Sets. </Typography>
          </Box>
          <Typography variant='body2'>Statement Begins...</Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}
