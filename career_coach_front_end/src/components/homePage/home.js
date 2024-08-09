import React, {useState, useEffect } from 'react';
import './home.css'
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/material';

const homePage = () => {
    // blah blah blah

    return (
        <div>
            <h1>Career Coach AI, the leading AI assited Career Coach</h1>
            <p className='reason-div'>
                Our founder, Carter Naegle, struggled when trying to decide what he wanted to do. He really enjoyed sales but he also enjoyed the technical work of Software Engineering.
                He figured that he couldn't be alone in this struggle. He decided to create a tool to help highschool and college students alike decide what jobs to pursue.
            </p>

            <Box>
                <Button color="primary" variant='contained'>
                    Get Started
                </Button>
            </Box>

            <div>
                <h2>Testimonials</h2>
                <h3>Hear what our uses have to say!</h3>
            </div> 
        </div>
    );
};

export default homePage
