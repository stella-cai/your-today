import React from "react";

import "./styles.css";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

class HeaderUserProfile extends React.Component {
    
    render() {
        const { userename } = this.props;
  
      return (
        <div className="header-profile">
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Avatar>H</Avatar>
            </Grid>
            <Grid item className="profile-username">{userename}</Grid>
  
            <Grid item>
              <SentimentVerySatisfiedIcon className="profile-status"></SentimentVerySatisfiedIcon>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
  
  export default HeaderUserProfile;