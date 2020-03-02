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
    width: "300px"
  },

  buttonLeft: {
    marginTop: theme.spacing(3),
    float: "left"
  },

  buttonRight: {
    marginTop: theme.spacing(3),
    float: "right"
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
      {/* <List>
        <div className={classes.links}>

          <ListItem
            component="a" href="utoronto.ca"
          >
            <ListItemIcon><LinkIcon /></ListItemIcon>
            <ListItemText primary={'utoronto.ca'} />
          </ListItem>

          <ListItem
            component="a" href="q.utoronto.ca"
          >
            <ListItemIcon><LinkIcon /></ListItemIcon>
            <ListItemText primary={'q.utoronto.ca'} />
          </ListItem>

          <ListItem
            component="a" href="acorn.utoronto.ca"
          >
            <ListItemIcon><LinkIcon /></ListItemIcon>
            <ListItemText primary={'acorn.utoronto.ca'} />
          </ListItem>

          <ListItem
            component="a" href="cs.toronto.edu"
          >
            <ListItemIcon><LinkIcon /></ListItemIcon>
            <ListItemText primary={'cs.toronto.edu'} />
          </ListItem>

        </div>
      </List> */}
    <Button variant="contained" color="primary" size="large" className={classes.buttonLeft} startIcon={<LinkIcon />} href="http://acorn.utoronto.ca"> Acorn</Button>
    <Button variant="contained" color="primary" size="large" className={classes.buttonRight} startIcon={<LinkIcon />} href="http://q.utoronto.ca"> Quercus</Button>
    <Button variant="contained" color="primary" size="large" className={classes.buttonLeft} startIcon={<LinkIcon />} href="https://web.cs.toronto.edu"> UofT CS</Button>
    <Button variant="contained" color="primary" size="large" className={classes.buttonRight} startIcon={<LinkIcon />} href="http://acorn.utoronto.ca"> Acorn</Button>
    </div>
  )
}