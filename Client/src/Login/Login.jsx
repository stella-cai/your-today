import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginRight from "./LoginRight";
import "./Login.css"

class Login extends React.Component {
    componentDidMount(){ 
        document.title = "Login | Today" 
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

    render() {
        return (
            <Grid container component="main" style={this.rootStyle()}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} style={this.imageStyle()} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <LoginRight />
                </Grid>
            </Grid>
        )
    }
}

export {Login};