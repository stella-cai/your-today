/*  Full Queue component */
// Everything here was previously in the App component.
import React, { useState, useEffect} from "react";
import Box from '@material-ui/core/Box';

// Importing components
import {Header} from "./Header";
import {MainContent} from "./MainContent";
import webSocket from 'socket.io-client'


export function Homepage(props) {
  const [ws,setWs] = useState(webSocket('http://localhost:3000'))

  // const connectWebSocket = () => {
  //     setWs(webSocket('http://localhost:3000', {username: props.username}))
  // }

  useEffect(()=>{
      if(ws){
          console.log('success connect!')
          initWebSocket()
      }
  },[ws])

  const initWebSocket = () => {
    ws.send(JSON.stringify({type: "user-log-in", username: props.app.state.currentUser.username}))
      ws.on('getMessage', message => {
          const newNewEmails = [...props.app.state.messages, message];
          props.app.setState({ messages: newNewEmails });
          console.log(props.app.state.messages)
      })
  }

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

  const [music, setMusic] = useState(
    props.app.state.currentUser.music_url
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
          <MainContent 
          ws={ws}
          messages = {props.app.state.messages}
           username={props.app.state.currentUser.username}
           links = {links}
           setLinks = {setLinks}
           todos = {todos}
           setTodos = {setTodos}
           music = {music}
           setMusic = {setMusic}>
          </MainContent>
        </Box>
      </div>
    </div>
  );
}