import React, { useState } from "react";

import "./styles.css";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Button from '@material-ui/core/Button';
import {toggleDrawer} from '../../../../actions/drawers'

export default function HeaderUserProfile(props) {
  const username = props.username;
  const state = props.state;
  const setState = props.setState;
  //const [state, setState] = useState(props.state);

  return(
    <div className="header-profile">
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Button onClick={()=>toggleDrawer('left', state, setState, true)}><Avatar>H</Avatar></Button>
        </Grid>
        <Grid item className="profile-username">{username}</Grid>

        <Grid item>
          <SentimentVerySatisfiedIcon className="profile-status"></SentimentVerySatisfiedIcon>
        </Grid>
      </Grid>
    </div>
  )

}







