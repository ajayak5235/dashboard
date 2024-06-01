import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <Typography variant="h6" component="div">
            Network Traffic Dashboard
          </Typography>
          <Typography variant="subtitle2" component="div">
            Monitoring real-time data and alerts
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
