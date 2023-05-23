import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import Grid from '@mui/material/Grid';


function StatementCard({ epnum }) {
  return (
    <Card>
      <CardActionArea href={`https://snarp.github.io/magnus_archives_transcripts/episode/${String(epnum).padStart(3, '0')}.html`}>
        <CardMedia
          component='img'
          /* sx={{ height: 140 }} */
          image='static/images/cards/magnus.jpeg'
          title='Tape Recorder'
        />
        <CardContent>
          <Typography paragraph variant='h1' color='green'>
            {`MAG ${epnum}`}
          </Typography>
          <Box display='flex' justifyContent='flex-start'>
            <Typography component='span' variant='subtitle2'>Statement (probably) Recorded By Jonathan Sims, Head Archivist of the Magnus Institute, London</Typography>
          </Box>
          <Typography variant='body2'>Statement Begins...</Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}


export default function Statement({ epnum }) {
  return (
    <Grid item key={epnum}>
      <StatementCard epnum={epnum} />
    </Grid>
  );
}
