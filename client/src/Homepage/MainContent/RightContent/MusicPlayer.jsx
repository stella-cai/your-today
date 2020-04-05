import React, { useState } from "react";
import './MusicPlayer.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import {Middleware} from '../../../actions/middleware'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: "100%",
    flexWarp: 'wrap',
  },

  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: "auto",
    marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),
    backgroundColor: 'rgba(52, 52, 52, 0.1)',

  },

  player: {
    width: "100%",
    height: "auto",
    marginTop: theme.spacing(2),
    alignItems: 'stretch',
    alignSelf: 'stretch'
  },

  input: {
    width: '90%',
    color: "white",
    lineHeight: 'normal',
    flexGrow: 4
  },

  button: {
    width: '10%',
    float: 'right',
    color: "white",
    flexGlow: 1
  },

  divider: {
    height: 28,
    margin: 4,
  },

  frame: {
    width: "100%",
    height: "100%",
    minHeight: "330px",
    borderRadius: "2%"
  }

}))

export default function MediaControlCard(props) {
  const classes = useStyles();
  const searchKey = props.music;
  const setSearchKey = props.setMusic;
  if (!searchKey){
    setSearchKey('https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6')
  }

  var a = ""

  const searchButtonClickHandler = (e) => {
    e.preventDefault();
    var temp = a.split("/")
    temp = temp[0] + "//" + temp[2] + "/embed/playlist/" + temp[4]
    if(temp != searchKey){
      console.log("resetting playlist")
      setSearchKey(temp)
    }
    // Middleware.updatePlaylist(temp)
    console.log(searchKey)
  }

  const searchTextChangeHandler = (e) => {
    a = e.target.value
  }
  return (
    <div id="spotify" className={classes.root}>
      <div id="playlistInputContainer">
        <Paper component="form" className={classes.inputBox}>
          {/* <TextField id="input" variant="outlined"
            placeholder="Spotify Playlist URL"
            onChange={searchTextChangeHandler}
        >
         </TextField> */}
          <InputBase className={classes.input} placeholder="  Spotify Playlist URL" onChange={searchTextChangeHandler} />
          <Divider className={classes.divider} orientation="vertical" />
          <Button type="submit" className={classes.button} aria-label="search" onClick={searchButtonClickHandler}>
            Go
          </Button>
          {/* <IconButton id="button" type="submit"  aria-label="search" onClick={searchButtonClickHandler}>
           submit
        </IconButton> */}
        </Paper>
      </div>
      <div>
      <Box className={classes.player}>
        <iframe src={searchKey} className={classes.frame} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </Box>
      </div>
    </div>
  );
}


