import React from 'react';
import { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, Link, InputLabel, Select, MenuItem, FormControl } from '@mui/material';

const CreateAccountPage = () => {

  const [selectedTier, setSelectedTier] = useState('');
  
  const handleTierChange = (event) => {
    setSelectedTier(event.target.value);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 8 }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#fff', color: '#000' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Create an Account
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: 'center', marginTop: 0 }}>
            Already have an account?
            <Link href="/login" sx={{ marginLeft: 1, color: 'primary.main', textDecoration: 'underline', '&:hover': { textDecoration: 'underline' } }}>
              Login
            </Link>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: 0 }}>
            More info about pricing can be found 
            <Link href="/pricing" sx={{ marginLeft: 1, color: 'primary.main', textDecoration: 'underline', '&:hover': { textDecoration: 'underline' } }}>
              here
            </Link>
          </Box>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#000' } }}
            InputProps={{ style: { color: '#000', borderColor: '#000' } }}
          />
          <TextField
            label="LastName"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#000' } }}
            InputProps={{ style: { color: '#000', borderColor: '#000' } }}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#000' } }}
            InputProps={{ style: { color: '#000', borderColor: '#000' } }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#000' } }}
            InputProps={{ style: { color: '#000', borderColor: '#000' } }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#000' } }}
            InputProps={{ style: { color: '#000', borderColor: '#000' } }}
          />
          <FormControl fullWidth required>
            <InputLabel id="select-tier-label" sx={{ color: '#000' }}>Select Your Tier</InputLabel>
            <Select
              labelId="select-tier-label"
              id="select-tier"
              value={selectedTier}
              label="Select Your Tier"
              onChange={handleTierChange}
              sx={{ color: '#000', textAlign: 'left' }}
            >
              <MenuItem value="Free">Free</MenuItem>
              <MenuItem value="Basic">$20/mo - Basic</MenuItem>
              <MenuItem value="Ultra">$35/mo - Ultra</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            sx={{ padding: '12px 0', borderRadius: '8px' }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateAccountPage;
