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
    maxHeight: '120px',
    overflowY: 'auto'
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
export default function MediaControlCard(props) {
  const classes = useStyles();
  const links = props.links;
  const setLinks = props.setLinks;
  return (
    <div className={classes.root}>
      {
      links.map((link, index) => (
      <Button variant="outlined" size="large" className={classes.buttonLeft} startIcon={<LinkIcon />} href={link.url}>{link.displayName}
      </Button>
      ))
      }
    </div>
  )
}