import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    comment: {
        witdh: '50%',
        wordBreak: "break-all",
        color: 'white',
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none"
    },
    username: {
        width: '40%',
        wordBreak: "break-all",
        color: 'white',
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none"
    },
    viewed: {
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

export default function FeedbackItem({ feedback, index }) {
    const classes = useStyles();
    return (
        <TableRow className="item" key={feedback.comment}>
            <TableCell className="comment" component="th" scope="row">
                {feedback.comment}
            </TableCell>
            <TableCell className="username"component="th" scope="row">
                {feedback.username}
            </TableCell>
            {/* <TableCell className={classes.finish} component="th" scope="row">
                <Button variant='outlined' className={classes.button} onClick={() => complete(index)}>
                    Finish
                </Button>
            </TableCell> */}
        </TableRow>
    )

}