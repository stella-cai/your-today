import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import {Middleware} from "../actions/middleware";

const log = console.log;

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
            color: 'white'
        }

    },
})(TextField);

const useStyles = makeStyles(theme => ({
    root: {
    },
    text: {
        color: 'white',
        marginTop: theme.spacing(3),

    },
    input: {
        paddingRight: theme.spacing(10)
    },
    buttons: {
        float: 'right'
    },
    button: {
        color: 'white',
        border: '1px solid white',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}))


export default function All(props) {
    const classes = useStyles()
    const all = props.all
    const setAll = props.setAll
    const removeFromScreen = props.removeFromScreen
    const addToScreen = props.addToScreen
    const frozen = props.frozen
    const setFrozen = props.setFrozen

    const toFrozen = (index, id, username) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        //let inputs = document.querySelectorAll('input')
        let input = document.getElementById(id)
        let item = { id: all[index]._id, user: all[index].username, reason: input.value }
        removeFromScreen(index, setAll, all)
        addToScreen(setFrozen, frozen, item)
        Middleware.freezeUser(id, username, input.value ? input.value: " ")
    }

    return (
        <div>
            {all.map((a, index) => (
                <div key={a._id}>
                        <InputLabel className={classes.text} >{a.username} &emsp; {a.email} {a.date}</InputLabel>
                        <span>
                        <InputField id={a._id} label="Reason to Freeze"/>
                        </span>
                        <div className={classes.buttons}>
                            {/* <InputField id={a.id} label="Reason to Freeze" /> */}
                            <Button size="small" className={classes.button} onClick={() => toFrozen(index, a._id, a.username)}>Freeze</Button>
                        </div>
                </div>
            ))}
        </div>
    )
}