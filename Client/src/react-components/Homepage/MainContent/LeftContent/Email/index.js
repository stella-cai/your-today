import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Inbox from './Inbox'
import Compose from './Compose'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: 'space-between'
  },
  inbox: {
    width: '70%',
    padding: '0'
  },
  compose: {
    width: '30%',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export default function Email() {
  const classes = useStyles();
  //   const [todos, setTodos] = useState(
  //     [
  //       {what:"csc309", when:"6:30 PM"},
  //       {what:"csc301", when:"9:00 PM"},
  //       {what:"MAT235", when:"Before I go to bed."},
  //     ]
  // );


  return (
    <div className={classes.root}>
      <Inbox className={classes.inbox} id='inbox'></Inbox>
      <Compose className={classes.compose}></Compose>
    </div>
  );
}
