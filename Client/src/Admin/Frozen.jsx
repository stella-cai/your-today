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
                <p className={classes.text} key = {index}>{f.user}: {f.reason} {f.date} 
                <span className={classes.buttons}>
                <Button size='small' className={classes.button} onClick = {()=> unFrozen(index, f.id)}>Unfreeze</Button>
                <Button size='small' className={classes.button} onClick = {()=> ignore(index, f.id)}>Ignore</Button>
                    </span></p>
                ))}
        </div>
    )
}