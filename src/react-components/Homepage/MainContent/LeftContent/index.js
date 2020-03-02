import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Todos from "./Todos";

const useStyles = makeStyles(theme => ({
    root: {
        width: "50%",
        display: "inline-block",
        margin: "0",
        padding: "0",
    },
    leftContent: {
        marginRight: "25px",
    },
  }));


export default function LeftContent() {
    //const { todos, deleteTodo } = useTodoState([]);
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <div className ={classes.leftContent}>
                <Todos></Todos>
            </div>
        </div>
    )
}