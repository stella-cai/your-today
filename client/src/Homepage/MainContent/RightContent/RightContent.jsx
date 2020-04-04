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
        right: "50px",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: 'stretch',
    }
}));
export function RightContent(props) {
    const classes = useStyles();
    const links = props.links;
    const setLinks = props.setLinks;
    const music = props.music;
    const setMusic = props.setMusic;
    return(
        <div className={classes.root}>
            <MusicPlayer music = {music}
           setMusic = {setMusic}></MusicPlayer>
            <MostVisitedLinks links = {links} setLinks = {setLinks}></MostVisitedLinks>
        </div>
    );
}