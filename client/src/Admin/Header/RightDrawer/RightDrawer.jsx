import React, { useState } from "react";
import Drawer from '@material-ui/core/Drawer';
import { toggleDrawer } from '../../../actions/drawers'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Middleware} from "../../../actions/middleware";



import './RightDrawer.css';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '20%',
    position: 'fixed',
    top: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center'
  },
  header: {
    fontSize: "25px",
    color: 'white',
    margin: theme.spacing(2)
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    marginBottom: theme.spacing(3),
    color: "white",
    border: "1.5px solid white",
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    width: "80%",
  },
  div: {
    margin: '30px'
  }
}))


export function RightDrawer(props) {
  const state = props.state;
  const setState = props.setState;
  const classes = useStyles();

  const sideList = side => (
    <div className={classes.root}>
      <div className={classes.div}>
        <span className={classes.header}>Setting</span>
      </div>
      <div className={classes.buttons}>
        <Button variant="outlined" size="large" id="logoutBtn" className={classes.button} onClick={Middleware.logout}>Log Out</Button>
      </div>
    </div>
  );


  return (
    
    <div>
      <Drawer open={state.right} onClose={() => toggleDrawer('right', state, setState, false)}
        anchor='right'>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
