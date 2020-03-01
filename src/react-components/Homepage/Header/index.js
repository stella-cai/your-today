import React, { useState } from "react";

import "./styles.css";
import HeaderUserProfile from './HeaderUserProfile';
import HeaderSearch from './HeaderSearch';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';
/* The Header Component */
export default function Header(props) {
  const username = props.username;
  const [state, setState] = useState({
    left: false,
    right: false
  });

  return(
    <div className="header">
      <LeftDrawer state = {state} setState={ setState }></LeftDrawer>
      <RightDrawer state = {state} setState={ setState }></RightDrawer>
      <HeaderUserProfile username={ username } state={ state } setState={ setState }/>
      <HeaderSearch state={ state } setState={ setState }/>
    </div>
  );
}