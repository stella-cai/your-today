import React from 'react';
import Container from '@material-ui/core/Container';


class Focus extends React.Component{

    render() {
        return (
            <Container id="focus-page">
                <TextField id="date" label="Date" type="date" defaultValue="2020-03-01"
                    className={classes.textField} InputLabelProps={{shrink: true,}}/>
            </Container>
        )
    }
}

export default Focus;