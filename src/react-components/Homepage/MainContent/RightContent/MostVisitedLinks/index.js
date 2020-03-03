import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    height: "auto",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  buttonLeft: {
    marginTop: theme.spacing(2),
    color: "white",
    border: "1.5px solid white",
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    width: "48%",
  },

  buttonRight: {
    marginTop: theme.spacing(2),
    float: "right",
    color: "white",
    border: "1.5px solid white",
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    width: "48%"
  },

  list: {
    display: "block",
    maxHeight: "200px",
    overflowY: "scroll",
    overflowX: "hidden",
  },

  card: {
    width: "10px"
  }
}));
export default function MediaControlCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Button variant="outlined" size="large" className={classes.buttonLeft} startIcon={<LinkIcon />} href="http://acorn.utoronto.ca"> Acorn</Button>
    <Button variant="outlined" size="large" className={classes.buttonRight} startIcon={<LinkIcon />} href="http://q.utoronto.ca"> Quercus</Button>
    <Button variant="outlined" size="large" className={classes.buttonLeft} startIcon={<LinkIcon />} href="https://web.cs.toronto.edu"> UofT CS</Button>
    <Button variant="outlined" size="large" className={classes.buttonRight} startIcon={<LinkIcon />} href="https://leetcode.com"> LeetCode</Button>
    </div>
  )
}