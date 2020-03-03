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
        }
        
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
      width: "50%",
      wordBreak: "break-all",
      display: "inline-block",
    },
  }));
export default function Inbox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <TableRow>
            <InputField
                        className={classes.whatInput}
                        label="To Who"
            />
        </TableRow>
        <TableRow>
            <InputField
                        className={classes.whatInput}
                        label="Email Address"
            />
        </TableRow>
        <TableRow>
            <InputField
                        className={classes.whatInput}
                        label="Message"
            />
        </TableRow>
        <Button>Send</Button>
    </div>
  );
}
