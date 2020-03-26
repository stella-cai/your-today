import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  newEmailContent: {
    overflowY: "auto",
    maxHeight: "180px",
    width: "100%",
    whiteSpace: 'pre-line'
  }, 
  div: {
    color: 'white'
  }
}));

export default function Inbox(props) {
  const classes = useStyles();
  const sender = props.sender
  const date = props.date
  const content = props.content

  return (
    <div class="newEmail" className={classes.div}>
      <p>{sender}</p>
      <p>{date}</p>
      <p className={classes.newEmailContent}> {content}</p>
      {/* <Button variant="contained" color="primary" href="https://www.gmail.com">
        Read More Details on Gmail
      </Button> */}
    </div>
  );
}
