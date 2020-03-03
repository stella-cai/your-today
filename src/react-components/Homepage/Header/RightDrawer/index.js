import React, { useState } from "react";
import Drawer from '@material-ui/core/Drawer';
import { toggleDrawer } from '../../../../actions/drawers'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LinkSetting from './LinkSetting'

import './styles.css';

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

  }
}))


export default function TemporaryDrawer(props) {
  const state = props.state;
  const setState = props.setState;
  const classes = useStyles()
  const links = props.links;
  const setLinks = props.setLinks;
  const [linkSettingOpen, setLinkSettingOpen] = useState(false);

  const handleOpen = () => {
    setLinkSettingOpen(true);
  };

  const handleClose = () => {
    setLinkSettingOpen(false);
  };

  const sideList = side => (
    <div className={classes.root}>
      <div style={{ margin: '30px' }}>
        <span className={classes.header}>Setting</span>
      </div>
      <div className={classes.buttons}>
        <Button variant="outlined" size="large" className={classes.button}>WallPaper</Button>
        <Button onClick={handleOpen} variant="outlined" size="large" className={classes.button}>Favourite Links</Button>
        <Button variant="outlined" size="large" className={classes.button}>Manage Features</Button>
        <Button variant="outlined" size="large" className={classes.button}>Contact us</Button>
        <Button variant="outlined" size="large" className={classes.button}>Log Out</Button>
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
      <Drawer open={state.right} onClose={() => toggleDrawer('right', state, setState, false)}
        anchor='right'>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
