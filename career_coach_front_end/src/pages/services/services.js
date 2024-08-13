import React from "react";
import { Container, Paper, Box, Typography, Button } from "@mui/material";

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
                        <Box
                        component="img"
                        alt="Career Coach Image"
                        src="career_coach-no-background.png"
                        />
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
                <Box sx={{ margin: 3}}>
                    <Typography variant="h4" sx={{ textAlign: "left", marginTop: 4}}>Resume Feedback</Typography>
                    <Box
                        component="img"
                        alt="Career Coach Image"
                        src="resume-no-background.png"
                        />
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
                <Box sx={{ margin: 3}}>
                    <Typography variant="h4" sx={{ textAlign: "left", marginTop: 4 }}>Cover Letter</Typography>
                    <Box
                        component="img"
                        alt="Career Coach Image"
                        src="cover-letter.png"
                        />
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
                        Let us help you write the best cover letter possible. Give us the job description and be prepared to be amazed.
                    </Typography>
                </Box>
            </Paper>
            <Paper>
                <Box sx={{ margin: 3}}>
                    <Typography variant="h4" sx={{ textAlign: "left", marginTop: 4 }}>Emails</Typography>
                    <Box
                        component="img"
                        alt="Career Coach Image"
                        src="email-image-no-background.png"
                        />
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
                        Got a hostile email from a coworker? Let us help you reply.
                    </Typography>
                </Box>
            </Paper>
            <Button
                color="primary"
                variant="contained"
                href="./pricing"
                sx={{
                    margin: 8,
                    padding: '12px 24px',
                    fontSize: '1.25rem',
                    minWidth: '200px',
                    minHeight: '50px',
                }}
            >
                Pricing
            </Button>
        </Container>
    )
};

export default Services;


// Image From Online at https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fcareer-coach-isolated-cartoon-vector-43215685&psig=AOvVaw2xKf27FgwsFeJtDc6dxd8u&ust=1723664448716000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIClk8vc8ocDFQAAAAAdAAAAABAE
// Resume Image: https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-resume-icon-png-image_1009829.jpg