/*  Full Queue component */
// Everything here was previously in the App component.
import React, { useState } from "react";
import Box from '@material-ui/core/Box';

// Importing components
import {Header} from "./Header";
import {MainContent} from "./MainContent";


export function Homepage(props) {
  const [links, setLinks] = useState(
    props.app.state.currentUser.linkList
  );

  const [wallpaper, setWallpaper] = useState (
    props.app.state.currentUser.wallpaper
  );

  const [profileState, setProfileState] = useState(
    props.app.state.currentUser.mood
  );

  const [todos, setTodos] = useState(
    props.app.state.currentUser.todoList
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
            username={props.app.state.currentUser.username}
            links = {links} 
            setLinks = {setLinks}
            wallpaper={wallpaper} 
            setWallpaper = {setWallpaper}
            profileState = {profileState}
            setProfileState = {setProfileState}
          />
          <MainContent links = {links} setLinks = {setLinks} todos = {todos} setTodos = {setTodos}></MainContent>
        </Box>
      </div>
    </div>
  );
}