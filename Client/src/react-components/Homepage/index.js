/*  Full Queue component */
// Everything here was previously in the App component.
import React, { useState } from "react";
import Box from '@material-ui/core/Box';

// Importing components
import Header from "./Header";
import MainContent from "./MainContent";


export default function Homepage(props) {
  const [links, setLinks] = useState(
    [
      {url:"https://www.google.com", name:"Google"},
      {url:"http://acorn.utoronto.ca", name:"Acorn"},
      {url:"http://q.utoronto.ca", name:"Quercus"},
      {url:"https://web.cs.toronto.edu", name:"UofT CS"},
      {url:"https://leetcode.com", name:"Leetcode"}
    ]
  );

  const [wallpaper, setWallpaper] = useState (
    props.app.state.currentUser.wallpaper
  );

  const [profileState, setProfileState] = useState(
    props.app.state.currentUser.mood
  );

  console.log(wallpaper);
  console.log(setWallpaper);

  const bgStyle = () => {
    return {
      backgroundImage: 'url(' + wallpaper +')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100vh'
    }
  }

  const boxStyle = () => {
    return {
      position:'relative', 
      paddingLeft:"50px", 
      paddingRight: '50px', 
      paddingTop:'30px'
    }
  }


  return(      
    <div style={bgStyle()}>
      <div className="App">
        <Box style={boxStyle()}>
          <Header
            app={props.app}
            username="John Doe"
            links = {links} 
            setLinks = {setLinks}
            wallpaper={wallpaper} 
            setWallpaper = {setWallpaper}
            profileState = {profileState}
            setProfileState = {setProfileState}
          />
          <MainContent links = {links} setLinks = {setLinks} ></MainContent>
        </Box>
      </div>
    </div>
  );
}