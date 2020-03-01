import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import LoginRight from "./LoginRight";

class Login extends React.Component {

    // state = {

    // }
    render() {
        // const classes = useStyles();

        return (
            <div id="login-page">
                <Grid container component="main" direction="row">
                    <Grid item xs={false} sm={4} md={7} className="image"/>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <LoginRight/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Login;