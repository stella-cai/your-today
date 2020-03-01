import React, { useState } from "react";
import "./styles.css";

class showRightBar extends React.Component{
    render() {
      const { isRightBarShown } = this.props;
      if (isRightBarShown){
        return (
            <div className="sidenavshow" ref={this.id}>
                <div><span id="setting">setting</span></div>
                <a href="#about">Wallpaper</a>
                <a href="#services">Manager Features</a>
                <a href="#clients">Contact us</a>
            </div>
        );
    }else{
        return (
            <div className="sidenavnotshow" ref={this.id}>
                <div><span id="setting">setting</span></div>
                <a href="#about">Wallpaper</a>
                <a href="#services">Manager Features</a>
                <a href="#clients">Contact us</a>
            </div>
        );
    }
    };
  }

  export default showRightBar;