import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import "./styles.css";
import HeaderUserProfile from './HeaderUserProfile';
import HeaderSearch from './HeaderSearch';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';
/* The Header Component */
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: "flex",
  },

  profile: {
  },

  box: {
    flex: 'auto',
    width: '40%'
  },
}));

export default function Header(props) {
  const classes = useStyles()
  const username = props.username;
  const [state, setState] = useState({
    left: false,
    right: false
  });

  return (
    <div className={classes.root}>
      <LeftDrawer state={state} setState={setState}></LeftDrawer>
      <RightDrawer state={state} setState={setState}></RightDrawer>
      <HeaderUserProfile className={classes.profile} username={username} state={state} setState={setState} />
      {/* <Box className={classes.box}> */}
      <HeaderSearch state={state} setState={setState} />
      {/* </Box> */}
    </div>
  );
}