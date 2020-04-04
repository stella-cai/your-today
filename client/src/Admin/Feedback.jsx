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

export default function Feedback(props) {
    const classes = useStyles()
    const feedback = props.feedback
    const setFeedback = props.setFeedback
    console.log("in Feedback.jsx, feedback list:")
    console.log(feedback)
    const removeFromScreen = props.removeFromScreen
    const read = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        Middleware.readFeedback(id)
        removeFromScreen(index, setFeedback, feedback)
    }

    return (
        <div>
            {feedback.map((f, index) => (
                <p className={classes. text} key={index}>{f.username} : {f.feedback}
                    <span className={classes.buttons}>
                    <Button size='small' className={classes.button} onClick={() => read(index, f._id)}>Mark As Read</Button>
                    </span>
                </p>
            ))}
        </div>
            )
}