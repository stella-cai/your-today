import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    what: {
      width: "60%",
      wordBreak: "break-all",
    },
    when: {
        width: "30%",
        wordBreak: "break-all",
    },
    finish: {
        width: "10%",
    },

}));

export default function Todo({todo, index, complete}) {
    const classes = useStyles();
    return (
        <TableRow className= {classes.todo} key={todo.what}>
            <TableCell className = {classes.what} component="th" scope="row">
                {todo.what}
            </TableCell>
            <TableCell className = {classes.when} component="th" scope="row">
                {todo.when}
            </TableCell>
            <TableCell className = {classes.finish} component="th" scope="row">
                <Button
                variant="contained"
                color="secondary"
                onClick={
                    () => complete(index)
                }
                >
                Finish
            </Button>
            </TableCell>
        </TableRow>
    )

}