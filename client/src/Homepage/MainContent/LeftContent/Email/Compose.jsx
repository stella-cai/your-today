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
    header: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    headerText: {
        color: 'white'
    },
    input: {
        width: '100%',
        marginBottom: theme.spacing(1)
    }
}));
export default function Inbox(props) {
    const classes = useStyles();
    const to = props.to
    const setTo = props.setTo
    const subject = props.subject
    const setSubject = props.setSubject
    const message = props.message
    const setMessage = props.setMessage
    const sendMessage=props.sendMessage
    return (
        <div className={classes.root}>
            <TableRow className={classes.header}>
                <div className={classes.headerText}>COMPOSE</div>
                {/* <Button className={classes.header} disabled>
                    compose
                </Button> */}
            </TableRow>
            <TableRow>
                <InputField
                    className={classes.input}
                    label="To"
                    value={to}
                    onChange={e => setTo(e.target.value)}
                />
            </TableRow>
            <TableRow>
                <InputField
                    className={classes.input}
                    label="Subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                />
            </TableRow>
            <TableRow>
                <InputField
                    multiline rows='4'
                    className={classes.input}
                    label="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </TableRow>
            <TableRow>
                <Button className={classes.button} onClick={sendMessage}>Send</Button>
            </TableRow>
        </div>
    );
}
