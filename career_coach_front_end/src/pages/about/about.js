import React from "react";
import { Container, Paper, Box, Typography } from "@mui/material";

const About = () => {
    return (
        <Container sx={{ marginTop: 8}}>
            <Paper>
                <Box>
                <Typography variant='h2'>Feeling Stuck?</Typography>
                <Typography variant="body1">
                    Our founder, Carter Naegle, felt stuck too. Thats why he created Career Coach AI.
                </Typography>
                </Box>
                <Box>
                    <Typography variant="body1">
                        He knew AI could help highschool and college students figure out what they want to do for work.
                    </Typography>
                    <Typography>
                        Career Coach AI is designed to have all the supporting tools that you need to get you a job in the career you want!
                    </Typography>
                </Box>
            </Paper>
        </Container>
    )
};

export default About