import React, { useState } from "react";

import "./styles.css";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Button from '@material-ui/core/Button';
import {toggleDrawer} from '../../../../actions/drawers'
import UserStateModal from './UserStateModal'

export default function HeaderUserProfile(props) {
  const username = props.username;
  const state = props.state;
  const setState = props.setState;
  const [profileState, setProfileState] = useState(0);
  //const [state, setState] = useState(props.state);

  const [userStateModalOpen, setUserStateModalOpen] = useState(false);

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
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Button onClick={()=>toggleDrawer('left', state, setState, true)}><Avatar>H</Avatar></Button>
        </Grid>
        <Grid item className="profile-username">{username}</Grid>
        <Button onClick={handleOpen}>{getProfileState()}</Button>
        <Grid item>
        </Grid>
      </Grid>
    </div>
  )

}







