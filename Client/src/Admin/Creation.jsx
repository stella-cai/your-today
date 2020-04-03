import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    text: {
        color: 'white'
    }
}))

export default function Creation(props) {
    const classes = useStyles()
    const creation = props.creation
    const setCreation = props.Creation
    return (
        <div>
                {creation.map((eachCreation, index) => (
                <p className={classes.text} key = {index}>{eachCreation.user} {eachCreation.date}</p>
                ))}
        </div>
    )
}