import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import MusicPlayer from './MusicPlayer';
import MostVisitedLinks from './MostVisitedLinks'
const useStyles = makeStyles(theme => ({
    root: {
        width: "30%",
        display: "flex",
        margin: "0",
        padding: "0",
        position: "absolute",
        top: "100px",
        right: "30px",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: 'stretch',
    }
}));
export default function RightContent() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <MusicPlayer></MusicPlayer>
            <MostVisitedLinks></MostVisitedLinks>
        </div>
    );
}