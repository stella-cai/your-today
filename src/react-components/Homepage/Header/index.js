import React from "react";

import "./styles.css";
import HeaderUserProfile from './HeaderUserProfile';
import HeaderSearch from './HeaderSearch';

/* The Header Component */
class Header extends React.Component {
  render() {
    const { userename } = this.props;

    return (
      <div className="header">
        <HeaderUserProfile userename={ userename }/>
        <HeaderSearch />
      </div>
    );
  }
}

export default Header;
