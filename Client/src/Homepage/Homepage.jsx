/*  Full Queue component */
// Everything here was previously in the App component.
import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';

// Importing components
import {Header} from "./Header";
import {MainContent} from "./MainContent";
import webSocket from 'socket.io-client'
import {Middleware} from "../actions/middleware";


export function Homepage(props) {
  const [ws,setWs] = useState(webSocket(''))

  const [readPosition, setReadPosition] = useState(0)

  useEffect(()=>{
    document.title = props.app.state.currentUser.fisrtname + " " + props.app.state.currentUser.lastname 
      if(ws){
          console.log('success connect!')
          initWebSocket()
      }
  },[ws])

  const initWebSocket = () => {
    ws.send(JSON.stringify({type: "user-log-in", username: props.app.state.currentUser.username}))
      ws.on('getMessage', message => {
        console.log(message)
        console.log("INIT WEB SOCKET!!!!")
          const newNewEmails = [...props.app.state.messages, message]
          props.app.setState({ messages: newNewEmails })
          setReadPosition(count => count + 1)
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

  const deleteMessage = (index) => {
    const real_index = props.app.state.messages.length - 1 - index
    Middleware.removeMessageFromDatabase(props.app.state.messages[real_index]._id).then(function(result) {
      if (result == "success") {
        const newMessages = [...props.app.state.messages];
        newMessages.splice(real_index, 1);
        props.app.setState({ messages: newMessages });
      }
    })
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
           setMusic = {setMusic}
           deleteMessage={deleteMessage}
           readPosition={readPosition}
           setReadPosition={setReadPosition}
           >
          </MainContent>
        </Box>
      </div>
    </div>
  );
}