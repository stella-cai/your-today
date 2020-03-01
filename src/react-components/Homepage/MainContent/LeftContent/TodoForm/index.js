import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//import Input from "./../Input";

export default function TodoForm(props) {
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
        <Grid className="todo-form" container spacing={4}>
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
            <Grid
            className="todo-form__button-grid"
            item
            xl={2}
            lg={2}
            md={12}
            s={12}
            xs={12}
            >
                <Button
                variant="contained"
                color="primary"
                className="student-form__submit-button"
                onClick={handleSubmit}
                >
                    Add Student
                </Button>
            </Grid>
        </Grid>
    )
}