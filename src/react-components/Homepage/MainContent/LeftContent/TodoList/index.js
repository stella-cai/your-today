import React, { useState } from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Todo from "./Todo";
import TodoForm from "../TodoForm";

export default function TodoList(props) {
    const [todos, setTodos] = useState(props.todos);

    const complete = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const add = (newWhat, newWhen) => {
        const newTodos = [...todos, {what: newWhat, when: newWhen}];
        setTodos(newTodos);
        
    };


    // const handleChange = event => {
        
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     if (name === 'todoWhat') {
    //         setNewWhat(value)
    //     }
    //     else if (name === 'todoWhen') {
    //         setNewWhen(value)
    //         console.log(newWhen)
    //     }
        
    //   };

    return (
        <>
        <TodoForm
            todos = {todos}
            add = {add}
        ></TodoForm>
        <Table className="todoList">

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
        </>
    )
}