import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeleteIcon from '@material-ui/icons/Delete';
import NewEmail from './NewEmail'
import {Middleware} from "../../../../actions/middleware";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '2%',
    // minHeight: '380px',
    maxHeight: '30%',
    position: 'relative',
    width: "65%",
    flexDirection: 'column',
    wordBreak: "break-all",
    alignItems: 'flex-start',
    padding: '0',
    borderRight: theme.spacing(2)
  },
  buttons: {
    float:'right'
  },
  button: {
    color: 'white'
  }
}));

export default function Inbox(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleMove = (event, type) => {
      //type = 0 => Move Left, type = 1 => Move Right
      if(value == 0 && type == 0) {
          alert("Already Leftmost")
      }
      else if (value == newEmails.length - 1 && type == 1) {
        alert("Already Rightmost")
      }
      else if(type == 0) {
          setValue(value - 1);
      }
      else if(type == 1) {
          setValue(value + 1);
      }
  };
  const newEmails = props.newEmails

  return (
    <div className={classes.root} id='email-root'>
      <div className={classes.buttons}>
      <Button onClick={(e) => handleMove(e, 0)}><ArrowBackIosIcon className={classes.button}/></Button>
      <Button onClick={(e) => handleMove(e, 1)}><ArrowForwardIosIcon className={classes.button}/></Button>
      <Button><DeleteIcon className={classes.button}/></Button>
      </div>
      {
      newEmails.map((newEmail, index) => (
          <TabPanel value={value} index={index}>
            <NewEmail sender = {newEmail.sender} date = {newEmail.date} content = {newEmail.content}> </NewEmail>
          </TabPanel>
        ))
      }
      {/* <div className={classes.keepFooter}>
      <div className={classes.footer}> */}
      {/* </div>
      </div> */}
    </div>
  );
}
