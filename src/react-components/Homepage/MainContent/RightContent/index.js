import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import MusicPlayer from './MusicPlayer';
const useStyles = makeStyles(theme => ({
    root: {
        width: "30%",
        display: "inline-block",
        margin: "0",
        padding: "0"
    }
}));
export default function RightContent() {
    const classes = useStyles();
    return(
        <div class={classes.root}>
            <MusicPlayer></MusicPlayer>
        </div>
    );
}