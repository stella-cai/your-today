import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Middleware} from "../actions/middleware";

const useStyles = makeStyles(theme => ({
    text: {
        color: 'white',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    buttons: {
        float: 'right'
    },
    button: {
        color: 'white',
        border: '1px solid white',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
}))

const dateFormat = dateStr => {
    const date = new Date(dateStr)
    return date.toLocaleString()
}


export default function Frozen(props) {
    const classes = useStyles()
    const frozen = props.frozen
    const setFrozen = props.setFrozen
    const removeFromScreen = props.removeFromScreen
    const addToScreen = props.addToScreen
    const all = props.all
    const setAll = props.setAll
    const unFrozen = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        let item = {id: frozen[index].id, user: frozen[index].user}
        console.log(id)
        Middleware.unfreezeUser(id)
        removeFromScreen(index, setFrozen, frozen)
        addToScreen(setAll, all, item)
    }
    const ignore = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setFrozen, frozen)
    }

    return (
        <div className={classes.root}>
                {frozen.map((f, index) => (
                <p className={classes.text} key = {index}>{f.username} &emsp; {f.reason} &emsp; {dateFormat(f.date)} 
                <span className={classes.buttons}>
                <Button size='small' className={classes.button} onClick = {()=> unFrozen(index, f.account_id)}>Unfreeze</Button>
                <Button size='small' className={classes.button} onClick = {()=> ignore(index, f.id)}>Ignore</Button>
                    </span></p>
                ))}
        </div>
    )
}