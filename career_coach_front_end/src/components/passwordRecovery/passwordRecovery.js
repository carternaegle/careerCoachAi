import React from "react";
import { Container, Box, Paper, Typography, TextField, Button } from "@mui/material";

const passwordRecovery = () => {
    return (
        <Container maxWidth='sm' sx={{ marginTop: 8}}>
            <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#fff', color: '#000' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
                    Password Recovery
                </Typography>
                <Box
                    component="form"
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    }}
                >
                <Typography variant="h8">
                    You will recieve instructions for how to reset your password. 
                </Typography>
                <Typography>
                    *This may take up to 5 minutes. Please check your junk folder as well.
                </Typography>
                <TextField
                    label="Email"
                    type="email"
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
};

export default passwordRecovery