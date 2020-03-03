import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Inbox from './Inbox'
import Compose from './Compose'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
    inbox: {
        width: "50%"
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
      <div class = {classes.root}>
      <Inbox></Inbox>
      <Compose></Compose>
      </div>
  );
}
