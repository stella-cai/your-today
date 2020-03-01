import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TodoList from "./TodoList";

const useStyles = makeStyles(theme => ({
    root: {
        width: "70%",
        display: "inline-block",
        margin: "0",
        padding: "0"
    },
    leftContent: {
        marginRight: "25px",
    },
  }));


export default function LeftContent() {
    //const { todos, deleteTodo } = useTodoState([]);
    const classes = useStyles();
    const [todos, setTodos] = useState(
        [
            {what:"csc309", when:"2020-03-02"},
            {what:"csc301", when:"2020-03-08"},
        ]
    );
    return(
        <div class = {classes.root}>
            <div class={classes.leftContent}>
                <TodoList
                todos = {todos}
                >
                </TodoList>
            </div>
        </div>
    )
}