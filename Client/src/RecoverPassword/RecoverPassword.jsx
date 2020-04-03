import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';


class RecoverPassword extends React.Component{
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

    inputStyle = () => {
        return {
            marginTop: '10px',
            marginBottom: '30px',
        }
    }

    headerStyle = () => {
        return {
            marginTop: '50px',
            marginBottom: "20px",
        }
    }

    subHeaderStyle = () => {
        return {
            marginTop: '10px',
            marginBottom: "10px",
            fontSize: "15px"
        }
    }

    alertStyle = () => {
        return {
            display: 'none',
            marginTop: '20px',
            marginBottom: '10px',
            // marginLeft: '20px',
            // marginRight: '20px',
        }
    }

    lbuttonStyle = () => {
        return {
            float: "left", 
            marginBottom: "20px"
        }
    }

    rbuttonStyle = () => {
        return {
            float: "right", 
            marginBottom: "20px"
        }
    }

    submitRecover = (e) => {
        e.preventDefault()
        console.log('recover button clicked')
        document.querySelector("#recoverAlert").style.display = "block";
    }

    render() {
        return (
            <Grid container component="main" style={this.rootStyle()}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} style={this.imageStyle()} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Container id="recover-container" component="main" maxWidth="xs">
                        <Typography component="h1" variant="h5" style={this.headerStyle()}>
                            Recover Password
                        </Typography>
                        <Typography component="h3" variant="h6" style={this.subHeaderStyle()}>
                            Enter the email address associated with your account.
                        </Typography>
                        <form id="recover-form" noValidate>
                            <Grid item xs={12} sm={12}>
                                <TextField id="email-input" label="Email" 
                                    variant="filled" style={this.inputStyle()} fullWidth/>
                            </Grid>
                            
                            <Button type="submit" variant="contained" id="goback-button" style={this.lbuttonStyle()} href="./../Login">Go Back</Button>
                            <Button type="submit" variant="contained" color="primary" id="signup-button" style={this.rbuttonStyle()}
                                onClick={this.submitRecover}>
                                Send Email
                            </Button>
                        </form>
                        <br/>
                        <br/>
                        <Alert id ="recoverAlert" variant="filled" severity="success" style={this.alertStyle()}>
                            We sent you an email to reset your password! 
                        </Alert>
                    </Container>
                </Grid>
            </Grid>
        )
    }
}

export {RecoverPassword};