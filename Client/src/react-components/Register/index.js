import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import SecurityQuestion from "./SecurityQuestion";

import {Middleware} from "../../actions/middleware";


class Register extends React.Component {

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

    submitRegister = (e) => {
        e.preventDefault()
        const user = {
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.password,
            email: this.state.email,
            birthday: new Date(this.state.birthday),
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
        if (Middleware.userRegister(user) == 1) {
            alert("Username already exists!")
        }
        console.log('submit button clicked')
        // if (document.querySelector('#password').value == document.querySelector("#verify-password").value) {
        //     const user = {
        //         username: this.state.username,
        //         firstname: this.state.firstname,
        //         lastname: this.state.lastname,
        //         password: this.state.password,
        //         email: this.state.email,
        //         birthday: new Date(this.state.birthday),
        //         securityQuestions: [
        //             {
        //                 question: this.state.securityQuestions[0].question,
        //                 answer: this.state.securityQuestions[0].answer
        //             },
        //             {
        //                 question: this.state.securityQuestions[1].question,
        //                 answer: this.state.securityQuestions[1].answer
        //             },
        //             {
        //                 question: this.state.securityQuestions[2].question,
        //                 answer: this.state.securityQuestions[2].answer
        //             }
        //         ]
        //     }
        //     if (Middleware.userRegister(user) == 1) {
        //         alert("Username already exists!")
        //     }
        //     else {
        //         console.log("registration success")
        //         setTimeout(window.location.replace(".././Login"), 2000)
        //     }
        // }
        // else {
        //     alert("Passwords don't match!")
        // }
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
                            Register
                        </Typography>
                        <form id="register-form" noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={this.state.firstname} onChange = {(e) => this.setState({firstname: e.target.value})} name="firstName" variant="outlined" fullWidth
                                        id="firstName" label="First Name" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={this.state.lastname} onChange = {(e) => this.setState({lastname: e.target.value})} variant="outlined" fullWidth
                                        id="lastName" label="Last Name" name="lastName" required />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField value={this.state.email} onChange = {(e) => this.setState({email: e.target.value})} variant="outlined" fullWidth
                                        id="email" label="Email Address" name="email" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={this.state.username} onChange = {(e) => this.setState({username: e.target.value})} variant="outlined" fullWidth
                                        id="username" label="Username" name="username" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={this.state.birthday} onChange = {(e) => this.setState({birthday: e.target.value})} variant="outlined" fullWidth
                                        id="birthday" label="Birthday" type="date" InputLabelProps={{ shrink: true }} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField value={this.state.password} onChange = {(e) => this.setState({password: e.target.value})} variant="outlined" fullWidth name="password"
                                        label="Password" type="password" id="password" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField value={this.state.verifyPassword} onChange = {(e) => this.setState({verifyPassword: e.target.value})} variant="outlined" fullWidth name="password"
                                        label="Verify Password" type="password" id="verify-password" required />
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
                            </Grid>
                            <Button ype="submit" variant="contained" id="goback-button" style={this.lbuttonStyle()} href="./../Login">Go Back</Button>
                            <Button type="submit" variant="contained" color="primary" id="signup-button" style={this.rbuttonStyle()}
                                onClick={(e) => this.submitRegister(e)}>
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
