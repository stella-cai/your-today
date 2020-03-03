import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./styles.css"
import Timer from "./Timer"

// const timer = {
//     timeRemaining : 0,
//     startTimer = this.startTimer.bind(this),
//     countDown = this.countDown.bind(this),
// }

export default function Focus() {

    return (
        <Container id="focus-page">
            <div id="focus-ready">
                The key to success is to focus on goals, not obstacles.
                </div>
            {/* <h3 id="input-prompt"> How long do you want to study for?</h3>
                <div>
                    <TextField id="time-input" type="number"/>
                    <Button id="start-timer-btn" variant="outlined" onClick={this.startTimer}>START</Button>
                </div> */}
            <Timer />
            {/* <br/>
                <div id="timer">
                    timer: {this.state.time}
                </div> */}
        </Container>
    )
}

    // startTimer() {
    //     console.log("clicked");
    //     const time = document.querySelector("#time-input").value;
    //     console.log(time)
    //     timer.timeRemaining = time;
    // //     this.timer.timeRemaining = time;
    //    if(timer.timeRemaining > 0){
    //        setInterval(function() {
    //            timer.timeRemaining--;
    //        }, 1000)
    //    }
    // }

