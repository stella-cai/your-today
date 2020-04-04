import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    content: {
        witdh: '50%',
        wordBreak: "break-all",
        color: 'white',
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none"
    },
    date: {
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

const dateFormat = dateStr => {
    const date =new Date(dateStr)
    return date.toLocaleString()
}

export default function Message({ message, index}) {
    const classes = useStyles();
    return (
        <TableRow className={classes.message} key={message}>
            <TableCell className={classes.content} component="th" scope="row">
                {message.content}
            </TableCell>
             <TableCell className={classes.date} component="th" scope="row">
                {dateFormat(message.date)}
            </TableCell>
            {/* <TableCell className={classes.finish} component="th" scope="row">
                <Button variant='outlined' className={classes.button} onClick={() => complete(index)}>
                    Finish
                </Button>
            </TableCell>  */}
        </TableRow>
    )

}