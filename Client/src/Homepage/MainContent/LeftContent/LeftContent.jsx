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


export function LeftContent() {
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