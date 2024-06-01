// src/components/Summary.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Summary = ({ data }) => {
  const totalEvents = data.length;
  const uniqueIPs = new Set(data.map(entry => entry.src_ip)).size;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6">Total Events</Typography>
          <Typography variant="h4">{totalEvents}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6">Unique IPs</Typography>
          <Typography variant="h4">{uniqueIPs}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Summary;
