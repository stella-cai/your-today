import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import SecurityQuestion from "./SecurityQuestion";


class Register extends React.Component {

    render() {
        return (
            <Container id="register-container" component="main" maxWidth="xs">
                <Typography component="h1" variant="h5">
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
                                id="email" label="Email Address" name="email" required/>
                        </Grid>
                        

                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" fullWidth
                                id="username" label="Username" name="username" required/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" fullWidth
                                id="birthday" label="birthday" type="date" InputLabelProps={{ shrink: true }}/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" fullWidth name="password"
                                label="password" type="password" id="password" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" fullWidth name="password"
                                label="verify password" type="password" id="verify-password" required />
                        </Grid>

                        <Grid item spacing={2} xs={12}>
                            <SecurityQuestion
                                number={1}/>
                            <br/>
                            <SecurityQuestion
                                number={2}/>
                            <br/>
                            <SecurityQuestion
                                number={3}/>
                            <br/>
                        </Grid>

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" id="submit-button">
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="./../Login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        )
    }

}

export default Register;
