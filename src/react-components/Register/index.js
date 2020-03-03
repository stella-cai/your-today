import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import SecurityQuestion from "./SecurityQuestion";


class Register extends React.Component {
    rootStyle = () => {
        return {
            height: '100vh',
        }
    }

    imageStyle = () => {
        return {
            backgroundImage: 'url(https://source.unsplash.com/xfngap_DToE)',
            backgroundPosition: 'center',
        }
    }

    submitRegister = (e) => {
        e.preventDefault()
        console.log('submit button clicked')
        if (document.querySelector('#password').value == document.querySelector("#verify-password").value) {
            console.log("registration success")
            setTimeout(window.location.replace(".././Login"), 2000)
        } else {
            
        }
    }

    render() {
        return (
            <Grid container component="main" style={this.rootStyle()}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} style={this.imageStyle()} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Container id="register-container" component="main" maxWidth="xs">
                        <Typography component="h1" variant="h5" style={{marginTop:"20px", marginBottom: "20px" }}>
                            Register
                        </Typography>
                        <form id="register-form" noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField name="firstName" variant="outlined" fullWidth
                                        id="firstName" label="First Name" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField variant="outlined" fullWidth
                                        id="lastName" label="Last Name" name="lastName" required />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField variant="outlined" fullWidth
                                        id="email" label="Email Address" name="email" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField variant="outlined" fullWidth
                                        id="username" label="Username" name="username" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField variant="outlined" fullWidth
                                        id="birthday" label="Birthday" type="date" InputLabelProps={{ shrink: true }} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField variant="outlined" fullWidth name="password"
                                        label="Password" type="password" id="password" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField variant="outlined" fullWidth name="password"
                                        label="Verify Password" type="password" id="verify-password" required />
                                </Grid>

                                <Grid item spacing={2} xs={12}>
                                    <SecurityQuestion
                                        number={1} />
                                    <br />
                                    <SecurityQuestion
                                        number={2} />
                                    <br />
                                    <SecurityQuestion
                                        number={3} />
                                    <br />
                                </Grid>
                            </Grid>
                            <Button ype="submit" variant="contained" id="goback-button" style={{ float: "left", marginBottom: "20px" }} href="./../Login">Go Back</Button>
                            <Button type="submit" variant="contained" color="primary" id="signup-button" style={{ float: "right", marginBottom: "20px" }}
                                onClick={this.submitRegister}>
                                Sign Up
                            </Button>
                        </form>
                    </Container>    
                </Grid>
            </Grid>
        )
    }

}

export default Register;
