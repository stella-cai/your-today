import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: 0,
        };
    }

   startTimer = event => {
        event.preventDefault();
        console.log("click")
        const total = document.querySelector("#time-input").value;
        console.log(total)
        for(let k = 1; k <=total; k++) {
            setTimeout(() => {
                this.setState({countdown: total-k});
                console.log(this.state.countdown);
                if(k == total) {
                    console.log("finish");
                }
              }, k * 1000)
        }
    }

    render() {
        // const { minutes, seconds } = this.state
        return (
            <div style={{textAlign: 'center'}}>
            <h3 id="input-prompt"> How long do you want to study for?</h3>
                <div>
                    <TextField id="time-input" type="number"/>
                    <Button id="start-timer-btn" variant="outlined" onClick={this.startTimer}>START</Button>
                </div>
                <br/>
                <div id="timer">
                    <h3>timer: {this.state.countdown}</h3>
                </div>
            {/* <div>
                { minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div> */}
            </div>
        )
    }
}