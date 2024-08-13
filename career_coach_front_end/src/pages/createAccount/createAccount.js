import React from 'react';
import { Box, Button, TextField, Typography, Container, Paper, Link } from '@mui/material';

const CreateAccountPage = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 8}}>
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
              <Link href="/login" sx={{ marginLeft: 1, color: 'primary', textDecoration: 'underline', '&:hover': { textDecoration: 'underline' } }}>
                Login
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
            label="Last Name"
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
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color='primary'
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateAccountPage;
