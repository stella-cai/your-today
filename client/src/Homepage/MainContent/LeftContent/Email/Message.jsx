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
        witdh: '50%',
        wordBreak: "break-all",
        color: 'white',
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none"
    },
    date: {
        width: '40%',
        wordBreak: "break-all",
        color: 'white',
        borderTop: "0.7px solid rgba(52, 52, 52, 0.5)",
        borderBottom: "none"
    }
    
}));

const dateFormat = dateStr => {
    const date =new Date(dateStr)
    return date.toLocaleString()
}

export default function Message({ setTo, message, index, deleteMessage}) {
    const classes = useStyles();
    return (

        <Card className={classes.root} style={{width: "420px"}}>
        <CardActionArea style={{width: "420px"}}>
          <CardContent style={{width: "420px"}}>
            <Typography gutterBottom variant="body2" component="p">
            {message.subject}: {message.content}, {message.sender}, {dateFormat(message.date)}
            </Typography>
            <Button size="small" color="primary" onClick={()=>setTo(message.sender)}>
            Reply
          </Button>
          <Button size="small" color="primary" onClick={() => deleteMessage(index)}>
            Delete
          </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    )

}