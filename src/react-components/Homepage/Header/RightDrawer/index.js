import React, { useState } from "react";
import Drawer from '@material-ui/core/Drawer';
import {toggleDrawer} from '../../../../actions/drawers'
import './styles.css';


export default function TemporaryDrawer(props) {
  const state = props.state;
  const setState = props.setState;


  const sideList = side => (
    <div className="sidenav">
        <div>
            <span id="setting">Setting</span>
        </div>
        <div>
            <button className="button">WallPaper</button>
            <button className="button">Manage Features</button>
            <button className="button">Contact us</button>
        </div>
    </div>
  );


  return (
    <div>
      <Drawer open={state.right} onClose={()=>toggleDrawer('right', state, setState, false)}
        anchor='right'>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
