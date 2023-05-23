// import Spiral from 'pages/SampleApp/components/Spiral';
// import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import React from 'react';
// import Statement from './components/Statement';
import SongTable from './components/Mechs';


export default function MechsPage() {
  return (
    <div>
      <Typography variant='h1'>
        The Book is lying open, there are tales to be told...
      </Typography>
      <br />
      <Typography variant='body2'>
        Like whiskey laced with gasoline we're deadly when we're drunk
        <br />
        <br />
        So shut your face and settle down you sneering little punks
        <br />
        <br />
        For space is vast and you are small it's black and bitter cold,
        <br />
        <br />
        The Book is lying open, there are tales to be told...
      </Typography>
      <br />
      <SongTable />
    </div>
  );
}
