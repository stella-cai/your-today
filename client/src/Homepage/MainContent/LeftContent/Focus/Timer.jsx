import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const InputField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: 'white',
            },
            '& label': {
                color: 'white',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
            },
            '& .MuiInput-underline:before': {
                borderBottomColor: 'white',
            },
            '& 	.MuiInput-root': {
                color: 'white',
                width: '80%',
                paddingLeft: '10px'
            },
            '&::placeholder': {
                color: 'white'
            },
        },
    })(TextField)

const useStyles = makeStyles(theme => ({
    input: {
        color: 'white'
    },
    textalign: {
        width: '50vw',
        textAlign: 'center' 
    },
    noborder: {
        border: "0px"
    }
}))

export default function Timer(props) {
    const countdown = props.countdown;
    const setCountdown = props.setCountdown;
    const [disabled, setDisabled] = React.useState(false);
    const startTimer = event => {
        event.preventDefault();
        const total = document.querySelector("#time-input").value * 60;
        for (let k = 1; k <= total; k++) {
            // console.log(this.state)
            setTimeout(() => {
                setCountdown(total - k)
                setDisabled(true)

                if (k == total) {
                    console.log("finish");
                    setCountdown(0)
                    setDisabled(false)
                }
            }, k * 1000)
        }
    }

    const classes = useStyles()


    const styleTime = () => {
        return {
            min: Math.floor(countdown / 60) < 10 ? ("0" + Math.floor(countdown / 60))
                : Math.floor(countdown / 60),
            sec: (countdown % 60) < 10 ? ("0" + countdown % 60)
                : countdown % 60
        }
    }

    return (
        <div className={classes.textalign}>
            <h3 id="input-prompt"> How long do you want to study for?</h3>
            <div>
                <InputField className={classes.input} id="time-input" placeholder="minutes" type="number" />
                <Button variant="outlined" id="start-timer-btn" onClick={startTimer} disabled={disabled}>
                    START
                </Button>
            </div>
            <br />
            <div id="timer">
                <h3 className={classes.noborder}>{styleTime().min} : {styleTime().sec} </h3>
            </div>
        </div>
    );
}
// export default class Timer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             countdown: 0,
//             disabled: false
//         };
//     }

//    startTimer = event => {
//         event.preventDefault();
//         const btn =  document.querySelector("#start-timer-btn");

//         const total = document.querySelector("#time-input").value * 60;
//         console.log(total)
//         for(let k = 1; k <= total; k++) {
//             // console.log(this.state)
//             setTimeout(() => {
//                 this.setState({countdown: total-k,
//                                 disabled: true});
//                 console.log(this.state.countdown);
//                 if(k == total) {
//                     console.log("finish");
//                     this.setState({
//                         countdown: 0,
//                         disabled: false
//                     })
//                 }
//             }, k * 1000)
//         }

//     }

//     styleTime = () => {
//         return {
//             min: Math.floor(this.state.countdown/60) < 10 ? ("0" + Math.floor(this.state.countdown/60)) 
//                 : Math.floor(this.state.countdown/60),
//             sec: (this.state.countdown % 60) < 10 ? ("0" + this.state.countdown % 60)
//                 : this.state.countdown % 60
//         }
//     }

//     render() {
//         // const { minutes, seconds } = this.state
//         return (
//             <h3 id="input-prompt"> How long do you want to study for?</h3>
//                 <div>
//                     <TextField id="time-input" placeholder="minutes" type="number"/>
//                     <Button id="start-timer-btn" variant="outlined" onClick={this.startTimer} disabled={this.state.disabled}>
//                         START
//                     </Button>
//                 </div>
//                 <br/>
//                 <div id="timer">
//                     <h3>{this.styleTime().min} : {this.styleTime().sec} </h3>
//                 </div>
//             </div>
//         )
//     }
// }