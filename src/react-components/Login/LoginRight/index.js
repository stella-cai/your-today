import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';

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
        }
    }

    buttonStyle = () => {
        return {
            justifyContent: 'center',
            margin: '20px',
        }
    }

    render() {
        return (
            <div style={this.paperStyle()}>
                <Typography component="h1" variant="h5">
                    Welcome Back!
                </Typography>
                <form noValidate style={this.formStyle()}>
                    <TextField id="username" variant="outlined" margin="normal" label="Username" required fullWidth />
                    <TextField id="password" variant="outlined" margin="normal" label="Password" required fullWidth />
                    <Button type="submit" variant="contained" color="primary" style={this.buttonStyle()}>
                        Start Your Day Here
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
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