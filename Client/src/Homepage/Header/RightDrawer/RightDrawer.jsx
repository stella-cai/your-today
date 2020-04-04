import React, { useState } from "react";
import Drawer from '@material-ui/core/Drawer';
import { toggleDrawer } from '../../../actions/drawers'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LinkSetting from './LinkSetting';
import WallpaperSetting from './WallpaperSetting';
import ContactSetting from './ContactSetting';
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
  const links = props.links;
  const setLinks = props.setLinks;
  const wallpaper = props.wallpaper;
  const setWallpaper = props.setWallpaper;

  const [linkSettingOpen, setLinkSettingOpen] = useState(false);
  const [wallpaperSettingOpen, setWallpaperSettingOpen] = useState(false);
  const [contactSettingOpen, setContactSettingOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    switch(e.target.parentElement.id){
      case("linkBtn"):
        setLinkSettingOpen(true);
        break;
      case("wallpaperBtn"):
        console.log("click wallpaper")
        setWallpaperSettingOpen(true);
        break;
      case("contactBtn"):
        setContactSettingOpen(true);
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setLinkSettingOpen(false);
    setWallpaperSettingOpen(false);
    setContactSettingOpen(false);
  };

  const sideList = side => (
    <div className={classes.root}>
      <div className={classes.div}>
        <span className={classes.header}>Setting</span>
      </div>
      <div className={classes.buttons}>
        <Button onClick={handleOpen} variant="outlined" size="large" id="wallpaperBtn" className={classes.button}>Wallpaper</Button>
        <Button onClick={handleOpen} variant="outlined" id="linkBtn" size="large" className={classes.button}>Favourite Links</Button>
        {/* <Button variant="outlined" size="large" className={classes.button}>Manage Features</Button> */}
        <Button onClick={handleOpen} variant="outlined" size="large" id="contactBtn" className={classes.button}>Contact us</Button>
        <Button variant="outlined" size="large" id="logoutBtn" className={classes.button} onClick={Middleware.logout}>Log Out</Button>
      </div>
    </div>
  );


  return (
    
    <div>
      <LinkSetting
      linkSettingOpen = {linkSettingOpen}
      setLinkSettingOpen = {setLinkSettingOpen}
      handleClose = {handleClose}
      links = {links} 
      setLinks = {setLinks}
      >
      </LinkSetting>
      <WallpaperSetting
      app={props.app}
      wallpaperSettingOpen = {wallpaperSettingOpen}
      setWallpaperSettingOpen = {setWallpaperSettingOpen}
      handleClose = {handleClose}
      wallpaper = {wallpaper} 
      setWallpaper = {setWallpaper}
      >
      </WallpaperSetting>

      <ContactSetting
      contactSettingOpen = {contactSettingOpen}
      setContactSettingOpen = {setContactSettingOpen}
      handleClose = {handleClose}
      >
      </ContactSetting>

      <Drawer open={state.right} onClose={() => toggleDrawer('right', state, setState, false)}
        anchor='right'>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
