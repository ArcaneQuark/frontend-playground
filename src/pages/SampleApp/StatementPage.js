// import Spiral from 'pages/SampleApp/components/Spiral';
import Grid from '@mui/material/Grid';
import React from 'react';
import Statement from './components/Statement';


export default function StatementPage() {
  return (
    <div>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 1, sm: 1, md: 1 }}>
        {Array.from(Array(200)).map((_, index) => (
          <Statement epnum={index + 1} />
        ))}
      </Grid>
    </div>
  );
}
