import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';

class LoginRight extends React.Component {

    // state = {

    // }
    render() {
        return (
            <div id="login-right">
                
                <div id="login-tab" className="main-content">
                    <Typography component = "h2" variant="h5"> Welcome back!</Typography>
                    
                    <form>
                        <div className="form-input">
                            <TextField id="login-username" type="text" name="username" margin="normal" 
                                variant="outlined" placeholder="Username" required fullWidth/>
                            <span className="help-block"></span>
                        </div>

                        <div className="form-input">
                            <TextField id="login-password" type="password" name="password" margin="normal" 
                                variant="outlined" placeholder="Password" required fullWidth/>
                            <span className="help-block"></span>
                        </div>

                        <div id="login-button-container" className="form-group">
                            <Button id="login-button" variant="outlined" color="primary" required fullWidth> 
                                Start Your Today Here 
                            </Button>
                        </div>

                        <Grid container >
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>

                    </form>
                </div>
                
                
            </div>
        )
    }
}

export default LoginRight;