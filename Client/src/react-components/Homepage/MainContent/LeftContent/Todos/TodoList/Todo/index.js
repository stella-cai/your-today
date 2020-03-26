import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    what: {
        witdh: '50%',
        wordBreak: "break-all",
        color: 'white',
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none"
    },
    when: {
        width: '40%',
        wordBreak: "break-all",
        color: 'white',
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none"
    },
    finish: {
        width: "10%",
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none"
    },

    button: {
        color: "white",
        border: "0.5px solid white",
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
      },
    
}));

export default function Todo({ todo, index, complete }) {
    const classes = useStyles();
    return (
        <TableRow className={classes.todo} key={todo.what}>
            <TableCell className={classes.what} component="th" scope="row">
                {todo.what}
            </TableCell>
            <TableCell className={classes.when} component="th" scope="row">
                {todo.when}
            </TableCell>
            <TableCell className={classes.finish} component="th" scope="row">
                <Button variant='outlined' className={classes.button} onClick={() => complete(index)}>
                    Finish
                </Button>
            </TableCell>
        </TableRow>
    )

}