import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        padding: 0,
        margin: 0,
        padding:" 0 16",
        textAlign: "center",
    },
    button: {
        display: "inline-block",
    },
  }));

export default function TodoForm(props) {
    const classes = useStyles();
    const add = props.add
    const [what, setWhat] = useState("");
    const [when, setWhen] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        add(what, when);
        setWhat("");
        setWhen("");
    }

    return(
        <Grid className={classes.root} container spacing={4}>
            <TextField
            name="todoWhat"
            label="What"
            value={what}
            onChange={e => setWhat(e.target.value)}
            />

            <TextField
            name="todoWhen"
            label="When"
            value={when}
            onChange={e => setWhen(e.target.value)}
            />
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
            >
                Add
            </Button>
        </Grid>
    )
}