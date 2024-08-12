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
          <Button color="inherit" href="./home">
            <img src="/headerimage.png" alt="Career Coach AI Logo" style={{ height: '100%', maxHeight: '50px' }} />
          </Button>
        </Box>

        {/* Navigation in the Middle */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Button color="inherit" href="./home" sx={{ fontSize: '1rem' }}>Home</Button>
          <Button color="inherit" href="./about" sx={{ fontSize: '1rem' }}>About</Button>
          <Button color="inherit" href="./services" sx={{ fontSize: '1rem' }}>Services</Button>
          <Button color="inherit" href="./contact" sx={{ fontSize: '1rem' }}>Contact</Button>
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
