import React from "react";
import { Box, Button, Container, Paper, TextField, Typography, Link } from "@mui/material";

const Login = () => {
    return (
        <Container maxWidth='sm' sx={{ marginTop: 8}}>
            <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#fff', color: '#000 '}}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
                    Login
                </Typography>
                <Box
                compnent="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
                >
                    <Box sx={{ textAlign: 'center', marginTop: 0 }}>
                        Don't have an account?
                        <Link href="/createAccount" sx={{ marginLeft: 1, color: 'primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                            Create an Account
                        </Link>
                    </Box>
                    
                    <TextField
                        label="Email"
                        variant='outlined'
                        fullWidth
                        required
                        InputLabelProps={{ style: { color: '#000' } }}
                        inputProps={{ style: { color: '#000', borderColor: '#000' } }}
                    />
                    <TextField
                        label="Password"
                        variant='outlined'
                        fullWidth
                        required
                        InputLabelProps={{ style: { color: '#000' } }}
                        inputProps={{ style: { color: '#000', borderColor: '#000'} }}
                    />
                    <Button
                        type="submit"
                        variant='contained'
                        fullWidth
                        color='primary'
                    >
                        Login
                    </Button>
                    <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                        Forgot your password?
                        <Link href="/passwordRecovery" sx={{ marginLeft: 1, color: 'primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                            Reset your password
                        </Link>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
};

export default Login