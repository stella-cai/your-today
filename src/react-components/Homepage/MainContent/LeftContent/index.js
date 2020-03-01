import React, { useState } from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";





export default function LeftContent() {
    //const { todos, deleteTodo } = useTodoState([]);
    const [todos, setTodos] = useState(
        [
            {what:"csc309", when:"2020-03-02"},
            {what:"csc301", when:"2020-03-08"},
        ]
    );
    return(
        <>
        <TodoList
        todos = {todos}
        >
        </TodoList>
        </>
    )
}