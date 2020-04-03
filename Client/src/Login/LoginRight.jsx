import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import { spacing } from '@material-ui/system';
import { browserHistory } from 'react-router';
import {Middleware} from "../actions/middleware";
import "./LoginRight.css"

class LoginRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectCountDown: 3,
            login: false,
            username: "",
            password: ""
        };
    }

    
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
        let self = this
        Middleware.login(self.state.username, self.state.password).then(function(result) {
            if(result == "success") {
                console.log("logging in");
                document.querySelector("#wrongPassword").style.display = "none"
                document.querySelector("#loginSuccess").style.display = "block"
                for(let k = 1; k <=3; k++) {
                    setTimeout(() => {
                        self.setState({redirectCountDown: 3-k});
                        if(k == 3) {
                            window.location.replace(".././");
                        }
                      }, 1000*k)
                }
            }
            else {
                alert("logging fail")
            }
        });
    }

    render() {


        return (
            <div style={this.paperStyle()} id="loginRight">
                <Typography component="h1" variant="h5">
                    Welcome Back!
                </Typography>
                <form noValidate style={this.formStyle()}>
                    <TextField value={this.state.username} onChange = {(e) => this.setState({username: e.target.value})} id="username" variant="outlined" margin="normal" label="Username" required fullWidth />
                    <TextField value={this.state.password} onChange = {(e) => this.setState({password: e.target.value})}  id="password" variant="outlined" margin="normal" label="Password" type="password" required fullWidth />
                    
                    <span id='button-container'>
                        <Button id='login-button' type="submit" variant="contained" color="primary" 
                            style={this.buttonStyle()} onClick={this.submitLogin}>
                            Start Your Day Here
                        </Button>
                    </span>
                    
                    <Grid container>
                        <Grid item xs>
                            <Link href="./../RecoverPassword" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="./../Register" variant="body2">
                                {"Register"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Alert id = "loginSuccess" variant="filled" severity="success">
                        Login success! Redirecting in {this.state.redirectCountDown} seconds ... 
                    </Alert>
                    <Alert id = "wrongPassword" variant="filled" severity="error">
                        The Username and Password don't Match. Try again!
                    </Alert>
                </form>
            </div>
        )
    }
}

export default LoginRight;