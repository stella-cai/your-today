import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Stepper from "./Stepper";
import Todos from "./Todos";
import Focus from "./Focus";


const useStyles = makeStyles(theme => ({
    root: {
        width: "50%",
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


export default function LeftContent() {
    //const { todos, deleteTodo } = useTodoState([]);
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <div className ={classes.leftContent}>
                {/* <Todos></Todos> */}
                {/* <Focus></Focus> */}
                
                <Stepper></Stepper>
            </div>
        </div>
    )
}