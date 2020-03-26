import React, { useState } from "react";

import "./styles.css";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Button from '@material-ui/core/Button';
import {toggleDrawer} from '../../../../actions/drawers'
import UserStateModal from './UserStateModal'
import FaceIcon from '@material-ui/icons/Face';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1)
  },

  username: {
    fontSize: "20px", 
    color: "white", 
    justifyContent: 'center', 
    alignSelf: 'center',
  },

  button: {
    color: "white"
  }
  }));

export default function HeaderUserProfile(props) {
  const username = props.username;
  const state = props.state;
  const setState = props.setState;
  const [profileState, setProfileState] = useState(0);
  //const [state, setState] = useState(props.state);

  const [userStateModalOpen, setUserStateModalOpen] = useState(false);

  const classes = useStyles()

  const getProfileState = () => 
  {
      if(profileState == 0) {
        return(
          <SentimentVerySatisfiedIcon className="profile-status"></SentimentVerySatisfiedIcon>
        )
      }
      else if (profileState == 1) {
        return(
          <SentimentVeryDissatisfiedIcon className="profile-status"></SentimentVeryDissatisfiedIcon>
        )
      }
  }

  const handleOpen = () => {
    setUserStateModalOpen(true);
  };

  const handleClose = () => {
    setUserStateModalOpen(false);
  };

  return(
    <div className="header-profile">
      <UserStateModal
      userStateModalOpen = {userStateModalOpen}
      setUserStateModalOpen = {setUserStateModalOpen}
      handleClose = {handleClose}
      profileState = {profileState}
      setProfileState = {setProfileState} 
      >
      </UserStateModal>
      <Box className={classes.root}>
        {/* <Grid item>
          <Button onClick={()=>toggleDrawer('left', state, setState, true)}><Avatar><FaceIcon /></Avatar></Button>
        </Grid> */}
        <Box item className="profile-username" className={classes.username}>{username}</Box>
        <Button onClick={handleOpen} className={classes.button}>{getProfileState()}</Button>
      </Box>
    </div>
  )

}







