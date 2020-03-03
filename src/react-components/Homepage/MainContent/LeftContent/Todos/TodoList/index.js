import React, { useState } from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    // todoForm: {
    //   padding: '0',
    //   margin: '0',
    //   display: 'none',
    // },
    todoForm: {
        // marginLeft: '2%',
        // marginRight: '2%',
        // width: '100%',
        display: "block",
        overflowY: "scroll",
        overflowX: "hidden",
        maxHeight: "40%",//need to do a more careful calculation

    },
    todoList: {
        marginLeft: '2%',
        // marginRight: '2%',
        // width: '100%',
        display: "block",
        overflowY: "scroll",
        overflowX: "hidden",

    }
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
            <TodoForm className={classes.todoList} todos = {todos} add = {add}/>

            <TableBody className={classes.todoList}>
                {todos.map((todo, index) => (
                <Todo key={uid(todo)} todo = {todo} todos = {todos} index = {index} complete = {complete} />
                ))}
            </TableBody>
        </Table>
        </>
    )
}