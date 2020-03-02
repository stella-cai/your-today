import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { spacing } from '@material-ui/system';
import { browserHistory } from 'react-router';
import "./styles.css"

class LoginRight extends React.Component {
    paperStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px',
            marginTop: '40px'    
        }
    }

    formStyle = () => {
        return {
            marginTop: '10px',
            flex: 1
        }
    }

    buttonStyle = () => {
        return {
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center',
        }
    }

    submitLogin = event => {
        event.preventDefault();
        console.log("clicked")
        if( document.querySelector("#username").value === "user" && document.querySelector("#password").value === "user"){
            console.log("logging in");
            setTimeout(() => {window.location.replace(".././homepage")}, 3000)
        }
    }

    render() {
        return (
            <div style={this.paperStyle()} id="loginRight">
                <Typography component="h1" variant="h5">
                    Welcome Back!
                </Typography>
                <form noValidate style={this.formStyle()}>
                    <TextField id="username" variant="outlined" margin="normal" label="Username" required fullWidth />
                    <TextField id="password" variant="outlined" margin="normal" label="Password" type="password" required fullWidth />
                    
                    <span id='button-container'>
                        <Button id='login-button' type="submit" variant="contained" color="primary" 
                            style={this.buttonStyle()} onClick={this.submitLogin}>
                            Start Your Day Here
                        </Button>
                    </span>
                    
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="./../Register" variant="body2">
                                {"Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

export default LoginRight;