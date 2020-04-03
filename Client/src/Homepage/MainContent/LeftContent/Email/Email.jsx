import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Inbox from './Inbox'
import Compose from './Compose'
import webSocket from 'socket.io-client'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: 'space-between'
  },
  inbox: {
    width: '70%',
    padding: '0'
  },
  compose: {
    width: '30%',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export function Email(props) {
  const classes = useStyles();

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [newEmails, setNewEmails] = useState(props.messages)

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
    ws.send(JSON.stringify({type: "user-log-in", username: props.username}))
      ws.on('getMessage', message => {
          const newNewEmails = [...newEmails, message];
          setNewEmails(newNewEmails);
          console.log(newEmails)
      })
  }

  const sendMessage = () => {
      ws.emit('getMessage', {sender: props.username, to: to, subject: subject, content: message, date: new Date()})
  }


  return (
    <div className={classes.root}>
      <Inbox newEmails = {newEmails} setNewEmails = {setNewEmails} className={classes.inbox} id='inbox'></Inbox>
      <Compose sendMessage = {sendMessage} to={to} setTo={setTo} subject={subject} setSubject={setSubject} message={message} setMessage={setMessage} className={classes.compose}></Compose>
    </div>
  );
}
