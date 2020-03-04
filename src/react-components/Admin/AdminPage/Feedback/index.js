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

export default function All(props) {
    const classes = useStyles()
    const feedback = props.feedback
    const setFeedback = props.setFeedback
    const removeFromScreen = props.removeFromScreen
    const read = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setFeedback, feedback)
    }

    return (
        <div>
            {feedback.map((f, index) => (
                <p className={classes. text} key={index}>{f.user} : {f.content}
                    <span className={classes.buttons}>
                    <Button size='small' className={classes.button} onClick={() => read(index, f.id)}>Mark As Read</Button>
                    </span>
                </p>
                    ))}
        </div>
            )
}