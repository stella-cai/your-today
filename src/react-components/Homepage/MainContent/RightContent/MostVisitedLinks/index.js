import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';
const useStyles = makeStyles(theme => ({
  list: {
    display: "block",
    maxHeight: "200px",
    overflowY: "scroll",
    overflowX: "hidden",
  }
}));
export default function MediaControlCard() {
    const classes = useStyles();
    return(
        <div
        className={classes.list}
        >
        <List>
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
        </List>
      </div>
    )
}