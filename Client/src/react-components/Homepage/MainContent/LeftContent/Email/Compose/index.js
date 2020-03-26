import React, { useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& 	.MuiInput-root': {
            color: 'white'
        },
        '& .Mui-focused border': {
            borderColor: 'white',
        },

    },
})(TextField);
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        //   backgroundColor: 'rgba(52, 52, 52, 0.2)',
        borderRadius: '2%',
        minHeight: '380px',
        maxHeight: '30%',
        position: 'relative',
        width: "15%",
        wordBreak: "break-all",
        display: "flex",
        flexDirection: 'column'
    },
    button: {
        color: 'white',
        border: '1px solid white',
        width: '100%',
        marginBottom: theme.spacing(1)
    },
    input: {
        width: '100%',
        marginBottom: theme.spacing(1)
    }
}));
export default function Inbox() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TableRow>
                <Button className={classes.button} variant="outlined" href="https://www.gmail.com">
                    Read More on Gmail
           </Button>
            </TableRow>
            <TableRow>
                <InputField
                    className={classes.input}
                    label="To"
                />
            </TableRow>
            <TableRow>
                <InputField
                    className={classes.input}
                    label="Subject"
                />
            </TableRow>
            <TableRow>
                <InputField
                    multiline rows='4'
                    className={classes.input}
                    label="Message"
                />
            </TableRow>
            <TableRow>
                <Button className={classes.button}>Send</Button>
            </TableRow>
        </div>
    );
}
