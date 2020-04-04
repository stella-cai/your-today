import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TodoList from "./TodoList";

const useStyles = makeStyles(theme => ({
  container: {
    width: '50vw',
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: "150px",
    color: 'white'
  },
  todos: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    margin: '0 auto',
    padding: '0'
  }
}));

export function Todos(props) {
  const classes = useStyles();

  return (
    <>
      <form className={classes.container} noValidate>
        {/* <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2020-03-01"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>getTodos(e.target.value)}
        /> */}
      </form>
      <TodoList
      todos = {props.todos}
      setTodos = {props.setTodos}
      classname={classes.todos}
      >
      </TodoList>
    </>
  );
}
