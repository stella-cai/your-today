import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Inbox from './Inbox'
import Compose from './Compose'
import webSocket from 'socket.io-client'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "50vw",
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
  const ws = props.ws

  const sendMessage = () => {
    console.log("sendMessage is called in email")
    ws.emit('getMessage', {sender: props.username, to: to, subject: subject, content: message, date: new Date()})
    setTo("")
    setSubject("")
    setMessage("")
  }


  return (
    <div className={classes.root}>
      <Inbox setTo={setTo} setReadPosition={props.setReadPosition} readPosition={props.readPosition} deleteMessage={props.deleteMessage} newEmails = {props.messages} className={classes.inbox} id='inbox'></Inbox>
      <Compose sendMessage = {sendMessage} to={to} setTo={setTo} subject={subject} setSubject={setSubject} message={message} setMessage={setMessage} className={classes.compose}></Compose>
    </div>
  );
}
