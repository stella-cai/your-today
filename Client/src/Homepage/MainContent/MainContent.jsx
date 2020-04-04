import React, { useState } from "react";
import TimeWeather from "./TimeWeather";
import {LeftContent} from "./LeftContent";
import {RightContent} from "./RightContent";
import { makeStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  root: {
    // padding: '2px 4px',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
}));


export function MainContent(props) {
  const classes = useStyles();
  const links = props.links;
  const setLinks = props.setLinks;
  const music = props.music;
  const setMusic = props.setMusic;

  return (
  <Grid className={classes.root}>
      <TimeWeather></TimeWeather>
      <div className={classes.content}>
        <LeftContent ws={props.ws} messages = {props.messages} username = {props.username} todos = {props.todos} setTodos = {props.setTodos}></LeftContent>
        <RightContent links = {links} setLinks = {setLinks} music = {music}
           setMusic = {setMusic}></RightContent>
      </div>
  </Grid>
  );
}