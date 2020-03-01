import React, { useState } from "react";

import "./styles.css";
import HeaderUserProfile from './HeaderUserProfile';
import HeaderSearch from './HeaderSearch';
import LeftDrawer from './LeftDrawer';

/* The Header Component */
export default function Header(props) {
  const username = props.username;
  const [state, setState] = useState({
    left: false,
  });

  return(
    <div className="header">
      <LeftDrawer state = {state} setState={ setState }></LeftDrawer>
      <HeaderUserProfile username={ username } state={ state } setState={ setState }/>
      <HeaderSearch />
    </div>
  );
}