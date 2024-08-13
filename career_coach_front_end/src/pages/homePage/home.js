import React, {useState, useEffect } from 'react';
import './home.css'
import { Button, Container, Typography,  } from '@mui/material';
import { Box } from '@mui/material';

const homePage = () => {
    // blah blah blah

    return (
        <Container sx={{ marginTop: 8 }}>
            <Box>
                <Typography variant= 'h2'>
                    Welcome to Career Coach AI
                </Typography>
            </Box>
            <Box>
                <Button color="primary" variant='contained' href="./createAccount">
                    Get Started
                </Button>
            </Box>

            <Box>
                <h2>Testimonials</h2>
                <h3>Hear what our uses have to say!</h3>
            </Box> 
        </Container>
    );
};

export default homePage
