import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import FeedbackItem from './FeedbackItem';

export default function Feedback(show) {

    const [feedbacks, setFeedbacks] = useState(
        [{comment: "Give me more study tips.", username: "mark12"},
         {comment: "How do I change my wallpaper?", username: "emilyc"},
         {comment: "Can I connect to apple music?", username: "ilikefruits"}
        ]
    );

    const useStyles = makeStyles(theme => ({

        feedbackList: {
            marginLeft: '2%',
            display: "block",
        },
        feedbackTable: {
            display: "block",
            overflowY: "auto",
            maxHeight: "260px",
        }
      }));
    
    const classes = useStyles();

    return (
    
        <Table className={classes.feedbackList}>

            <TableBody className={classes.feedbackTable}>
                {feedbacks.map((feedback, index) => (
                <FeedbackItem key={uid(feedback)} feedback = {feedback} feedbacks = {feedbacks} index = {index} />
                ))}
            </TableBody>
        </Table>
    )
    
}

