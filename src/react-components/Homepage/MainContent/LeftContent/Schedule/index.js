import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  // When our project is finished, we will get the default value from the backend. But for know, just assume that it's March 1, 2020 and we have two todos: csc309 and csc301.

  //const todoList = getTodosFromServer(Today)
  const [todos, setTodos] = useState(
    [
      {what:"csc309", when:"6:30 PM"},
      {what:"csc301", when:"9:00 PM"},
      {what:"MAT235", when:"Before I go to bed."},
    ]
);

  const getTodos = (day) => {
    // For now, assume the user only stores todos for 2020-03-03 and 2020-03-01, later we will get the data from the server.

    //const todoList = getTodosFromServer(day)

    if(day === "2020-03-03") {
      setTodos(
        [
          {what:"Go Shopping to buy milk.", when:"6:30 PM"},
          {what:"Watch The Town", when:"9:00 PM"},
        ]
      )
    }
    else if (day === "2020-03-01") {
      setTodos(
        [
          {what:"csc309", when:"6:30 PM"},
          {what:"csc301", when:"9:00 PM"},
          {what:"MAT235", when:"Before I go to bed."},
        ]
      )
    }
  }

  return (
    <>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2020-03-01"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>getTodos(e.target.value)}
        />
      </form>
      <TodoList
      todos = {todos}
      setTodos = {setTodos}
      >
      </TodoList>
    </>
  );
}
