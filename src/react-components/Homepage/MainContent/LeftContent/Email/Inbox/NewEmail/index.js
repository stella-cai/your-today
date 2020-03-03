import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';


export default function Inbox(props) {

const sender = props.sender
const date = props.date
const content = props.content

return (
<div class="newEmail">
  <p>{sender}</p>
  <p>{date}</p>
  <p style={{whiteSpace: 'pre-line'}}>{content}</p>
  <Button variant="contained" color="primary" href="https://www.gmail.com">
        Read More Details on Gmail
      </Button>
</div>
);
}
