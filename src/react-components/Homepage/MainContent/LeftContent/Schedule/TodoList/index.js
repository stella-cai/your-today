import React, { useState } from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Todo from "./Todo";
import TodoForm from "../TodoForm";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    todoForm: {
      padding: '0',
      margin: '0',
      display: 'none',
    },
    todoList: {
        display: "block",
        overflowY: "scroll",
        overflowX: "hidden",
        maxHeight: "260px",//need to do a more careful calculation
    },
  }));

export default function TodoList(props) {
    //const [todos, setTodos] = useState(props.todos);

    const todos = props.todos
    const setTodos = props.setTodos



    const classes = useStyles();

    const complete = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const add = (newWhat, newWhen) => {
        const newTodos = [...todos, {what: newWhat, when: newWhen}];
        setTodos(newTodos);
        
    };

    return (
        <>
        <Table className={classes.todoList}>

            <TableBody className="todoList">
                {todos.map((todo, index) => (
                <Todo
                key={uid(todo)}
                todo = {todo}
                todos = {todos}
                index = {index}
                complete = {complete}
                >
                </Todo>
                ))}
            </TableBody>
        </Table>
        <TodoForm
            className={classes.todoForm}
            todos = {todos}
            add = {add}
        />
        </>
    )
}