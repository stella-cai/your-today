import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {toggleDrawer} from '../../../../actions/drawers'

const useStyles = makeStyles({
  list: {
    width: 350,
    textAlign: 'center',
  },
  leftDrawerAvatar : {
      margin: "0 auto",
      marginTop: "50px",
      height: "60px",
      width: "60px",
  },
  links: {
      marginLeft: 20,
      marginRight: 20,
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const state = props.state;
  const setState = props.setState;


  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        <Avatar className={classes.leftDrawerAvatar}>H</Avatar>
        <div className={classes.links}>
          
          <ListItem
          component="a" href="mailto:example@example.com"
          >
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={'example@example.com'} />
          </ListItem>

          <ListItem
          component="a" href="https://twitter.com/example"
          >
            <ListItemIcon><TwitterIcon /></ListItemIcon>
            <ListItemText primary={'twitter.com/example'} />
          </ListItem>

          <ListItem
          component="a" href="https://linkedin.com/in/example"
          >
            <ListItemIcon><LinkedInIcon /></ListItemIcon>
            <ListItemText primary={'linkedin.com/in/example'} />
          </ListItem>

          <ListItem
          component="a" href="https://facebook.com/example"
          >
            <ListItemIcon><FacebookIcon /></ListItemIcon>
            <ListItemText primary={'facebook.com/example'} />
          </ListItem>

          <ListItem
          component="a" href="https://youtube.com/example"
          >
            <ListItemIcon><YouTubeIcon /></ListItemIcon>
            <ListItemText primary={'youtube.com/example'} />
          </ListItem>
        </div>
      </List>
    </div>
  );


  return (
    <div>
      <Drawer open={state.left} onClose={()=>toggleDrawer('left', state, setState, false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
