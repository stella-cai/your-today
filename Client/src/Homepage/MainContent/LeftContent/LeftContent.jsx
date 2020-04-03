import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Stepper from "./Stepper";


const useStyles = makeStyles(theme => ({
    root: {
        width: "60%",
        display: "inline-block",
        margin: "0",
        padding: "0",
        borderRadius: '2%',
        marginTop: theme.spacing(2)
    },
    leftContent: {
        marginRight: "25px",
    },
  }));


export function LeftContent(props) {
    //const { todos, deleteTodo } = useTodoState([]);
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <div className ={classes.leftContent}>
                {/* <Todos></Todos> */}
                {/* <Focus></Focus> */}
                
                <Stepper messages = {props.messages} username = {props.username} todos = {props.todos} setTodos = {props.setTodos}></Stepper>
            </div>
        </div>
    )
}