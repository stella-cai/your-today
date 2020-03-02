import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Schedule from "./Schedule";

const useStyles = makeStyles(theme => ({
    root: {
        width: "70%",
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
                <Schedule></Schedule>
            </div>
        </div>
    )
}