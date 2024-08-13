import React from "react";
import { Container, Paper, Box , TextField, Typography, Button, Link} from '@mui/material';

const Contact = () => {
    return(
        <Container maxWidth="sm" sx={{ marginTop: 8}}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#fff', color: '#000' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>Please fill out the following information and we will get back to you as soon as we can:</Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Name"
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
            label="Subject"
            type="text"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#000' } }}
            InputProps={{ style: { color: '#000', borderColor: '#000' } }}
          />
          <TextField
            label="Message"
            type="text"
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
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
    )
}

export default Contact