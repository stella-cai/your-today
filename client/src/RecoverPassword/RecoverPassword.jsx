import React from 'react';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import SecurityQuestion from "../Register/SecurityQuestion";

import {Middleware} from "../actions/middleware";


class RecoverPassword extends React.Component {
    componentDidMount(){ 
        document.title = "Recover Password | Today" 
        } 

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            password: "",
            verifyPassword: "",
            birthday: "",
            securityQuestions: [{question: "", answer: ""}, {question: "", answer: ""}, {question: "", answer: ""}]
        }
    }


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

    submitRecover = (e) => {
        e.preventDefault()
        console.log('submit button clicked')
        if (document.querySelector('#password').value === document.querySelector("#verify-password").value) {
            const user = {
                username: this.state.username,
                password: this.state.password,
                securityQuestions: [
                    {
                        question: this.state.securityQuestions[0].question,
                        answer: this.state.securityQuestions[0].answer
                    },
                    {
                        question: this.state.securityQuestions[1].question,
                        answer: this.state.securityQuestions[1].answer
                    },
                    {
                        question: this.state.securityQuestions[2].question,
                        answer: this.state.securityQuestions[2].answer
                    }
                ]
            }
            // TODO check username exists and security question.
            Middleware.resetPassword(user).then(function(result) {
                if(result == "success") {
                    alert("Reset Successfully. Please use the new password to log in.")
                    window.location.replace(".././");
                }
                else {
                    alert("Answers to Security Questions not corrct!")
                }
            });
        }
        else {
            alert("New Passwords don't match!")
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

    marginStyle = () => {
        return {
            marginTop:"20px", 
            marginBottom: "20px" 
        }
    }

    render() {
        return (
            <Grid container component="main" style={this.rootStyle()}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} style={this.imageStyle()} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Container id="register-container" component="main" maxWidth="xs">
                        <Typography component="h1" variant="h5" style={this.marginStyle()}>
                            Forgot Password
                        </Typography>
                        <form id="register-form" noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={this.state.username} onChange = {(e) => this.setState({username: e.target.value})} variant="outlined" fullWidth
                                        id="username" label="Username" name="username" required />
                                </Grid>
                                <Grid item spacing={2} xs={12}>
                                    <SecurityQuestion
                                        number={0} registerForm={this}/>
                                    <br />
                                    <SecurityQuestion
                                        number={1} registerForm={this}/>
                                    <br />
                                    <SecurityQuestion
                                        number={2} registerForm={this}/>
                                    <br />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={this.state.password} onChange = {(e) => this.setState({password: e.target.value})} variant="outlined" fullWidth name="password"
                                        label="New Password" type="password" id="password" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={this.state.verifyPassword} onChange = {(e) => this.setState({verifyPassword: e.target.value})} variant="outlined" fullWidth name="password"
                                        label="Verify New Password" type="password" id="verify-password" required />
                                </Grid>
                            </Grid>
                            <Button ype="submit" variant="contained" id="goback-button" style={this.lbuttonStyle()} href="./../">Go Back</Button>
                            <Button type="submit" variant="contained" color="primary" id="signup-button" style={this.rbuttonStyle()}
                                onClick={(e) => this.submitRecover(e)}>
                                Recover
                            </Button>
                        </form>
                    </Container>    
                </Grid>
            </Grid>
        )
    }

}

export {RecoverPassword};
