import React from "react";
import { Container, Paper, Box, Typography } from "@mui/material";

const Services = () => {
    return(
        <Container sx={{ marginTop: 8 }}>
            <Paper sx={{ boxShadow: "none" }}>
                <Box>
                    <Typography variant="h2" sx={{ marginTop: 4 }}>The Tools To Help You Succeed</Typography>
                </Box>
            </Paper>
            <Paper>
                <Box sx={{ margin: 3}}>
                    <Box>
                        <Typography variant="h4" sx={{ textAlign: "left", marginTop: 4 }}>Career Advisor</Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                maxWidth: 500, 
                                marginTop: 2, 
                                textAlign: 'center',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                fontSize: '1.2rem'
                            }}
                        >
                            Our Career Advisor Tool takes a look at what skills you have and helps you find the right job for you. It also provides information about demand and pay for the suggested career.
                        </Typography>
                    </Box>
                </Box>
            </Paper>
            <Paper>
                <Box>
                    <Typography variant="h4" sx={{ textAlign: "left", marginTop: 4}}>Resume Feedback</Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            maxWidth: 500, 
                            marginTop: 2, 
                            textAlign: 'center', 
                            marginLeft: 'auto',  
                            marginRight: 'auto',
                            fontSize: '1.2rem'
                        }}
                    >
                        Upload your resume to get a ATS (Applicant Tracking System) score and feedback on how to improve.
                    </Typography>
                </Box>
            </Paper>
            <Paper>
                <Box>
                    <Typography variant="h4" sx={{ textAlign: "left", marginTop: 4 }}></Typography>
                </Box>
            </Paper>
        </Container>
    )
};

export default Services;
