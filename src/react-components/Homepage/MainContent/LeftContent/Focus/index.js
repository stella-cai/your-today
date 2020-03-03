import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./styles.css"

class Focus extends React.Component{

    render() {

        return (
            <Container id="focus-page">
                <div id="focus-ready">
                    The key to success is to focus on goals, not obstacles.
                </div>
                <h3 id="input-prompt"> How long do you want to study for?</h3>
                <div>
                    <TextField id="time-input" type="number"/>
                    <Button id="start-timer-btn" variant="outlined" onClick={this.startTimer}>START</Button>
                </div>
                <br/>
                <div id="timer">
                    timer: {this.state.time}
                </div>
            </Container>
        )
    }

    startTimer() {
        console.log("clicked");
        const time = document.querySelector("#time-input").nodeValue;
        this.setState({
            timeRemaining: time
        })
       while(this.state.timeRemaining > 0){
           setInterval(function() {
               this.state.timeRemaining--;
           }, 1000)
       }
    }
}

export default Focus;