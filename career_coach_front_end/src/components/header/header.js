import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        {/* Logo on the Left */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <Typography variant="h6" noWrap component="div">
            Career Coach AI
          </Typography>
        </Box>

        {/* Navigation in the Middle */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Button color="inherit" href="./home">Home</Button>
          <Button color="inherit" href="./about">About</Button>
          <Button color="inherit" href="./services">Services</Button>
          <Button color="inherit" href="./contact">Contact</Button>
        </Box>

        {/* Login Button on the Right */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
          <Button color="primary" variant="contained" href="./createAccount">Create Account</Button>
          <Button color="primary" variant="contained" href="./login">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
