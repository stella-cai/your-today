import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    content: {
        witdh: '42%',
        wordBreak: "break-all",
        color: 'white',
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none",
        paddingLeft: "5px",
        paddingRight: "5px"
    },
    date: {
        width: '18%',
        wordBreak: "break-all",
        color: 'white',
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none",
        paddingLeft: "5px",
        paddingRight: "5px"
    },
    subject: {
      width: '20%',
      wordBreak: "break-all",
      color: 'white',
      borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
      borderBottom: "none",
      paddingRight: "5px"
    },
    sender: {
    width: '20%',
    wordBreak: "break-all",
    color: 'white',
    borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
    borderBottom: "none",
    paddingLeft: "5px",
    paddingRight: "5px"
  }
    
}));
const log = console.log

const dateFormat = dateStr => {
    const date =new Date(dateStr)
    const today = new Date()
    log(date)
    if(date.getDate() === today.getDate()){
      log(date.toLocaleTimeString())
      return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
    else {
      log(date.toLocaleDateString())
      return date.toLocaleDateString()
    }
}

export default function Message({ setTo, message, index, deleteMessage}) {
    const classes = useStyles();
    return (

      //   <Card className={classes.root} style={{width: "420px"}}>
      //   <CardActionArea style={{width: "420px"}}>
      //     <CardContent style={{width: "420px"}}>

      //       {/* <TableRow className={classes.message} key={message.content}>
      //         <TableCell className={classes.subject} component="th" scope="row">
      //           {message.subject}
      //         </TableCell>
      //         <TableCell className={classes.content} component="th" scope="row">
      //           {message.content}
      //         </TableCell>
      //         <TableCell className={classes.sender} component="th" scope="row">
      //           {message.sender}
      //         </TableCell>
      //         <TableCell className={classes.date} component="th" scope="row">
      //           {dateFormat(message.date)}
      //         </TableCell>
      //       </TableRow> */}

      //       <Typography gutterBottom variant="body2" component="p">
      //       {message.subject}: {message.content}, {message.sender}, {dateFormat(message.date)}
      //       </Typography>
      //       <Button size="small" color="primary" onClick={()=>setTo(message.sender)}>
      //         Reply
      //       </Button>
      //       <Button size="small" color="primary" onClick={() => deleteMessage(index)}>
      //         Delete
      //       </Button>
      //     </CardContent>
      //   </CardActionArea>
      // </Card>

       <TableRow className={classes.message} key={message.content}>
              <TableCell className={classes.subject} component="th" scope="row">
                {message.subject}
              </TableCell>
              <TableCell className={classes.content} component="th" scope="row">
                {message.content}
              </TableCell>
              <TableCell className={classes.sender} component="th" scope="row">
                {message.sender}
              </TableCell>
              <TableCell className={classes.date} component="th" scope="row">
                {dateFormat(message.date)}
              </TableCell>
        </TableRow> 
    )

}