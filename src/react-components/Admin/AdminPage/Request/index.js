import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

export default function Request(props) {
    const classes = useStyles()
    const request = props.request
    const setRequest = props.setRequest
    const removeFromScreen = props.removeFromScreen
    const approve = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setRequest, request)
    }
    const disapprove = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setRequest, request)
    }

    return (
        <div className={classes.root}>
                {request.map((r, index) => (
                <p className={classes. text} key = {index}>{r.user}: {r.reason}    (Date: {r.date})
                <span className={classes.buttons}>
                <Button size='small' className={classes.button} onClick = {()=> approve(index, r.id)}>Approve</Button> 
                <Button size='small' className={classes.button} onClick = {()=> disapprove(index, r.id)}>Disapprove</Button>
                </span></p>
                ))}
        </div>
    )
}