import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
const useStyles = makeStyles(theme => ({
    what: {
        width: "70%",
        wordBreak: "break-all",
      },
      when: {
          width: "20%",
          wordBreak: "break-all",
      },
      button: {
          width: "10%",
      },
      whatInput: {
          width: "100%",
          wordBreak: "break-all",
      },
      whenInput: {
        width: "100%",
        wordBreak: "break-all",
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


        <TableRow>
            <TableCell className = {classes.what} component="th" scope="row">
            <TextField
                className = {classes.whatInput}
                name="todoWhat"
                label="What"
                value={what}
                onChange={e => setWhat(e.target.value)}
            />
            </TableCell>
            <TableCell className = {classes.when} component="th" scope="row">
                <TextField
                    className = {classes.whenInput}
                    name="todoWhen"
                    label="When"
                    value={when}
                    onChange={e => setWhen(e.target.value)}
                />
            </TableCell>
            <TableCell className = {classes.button} component="th" scope="row">
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Add
            </Button>
            </TableCell>
        </TableRow>
    )
}