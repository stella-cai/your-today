import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Schedule from "./Schedule";

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
    return(
        <div class = {classes.root}>
            <div class={classes.leftContent}>
                <Schedule></Schedule>
            </div>
        </div>
    )
}