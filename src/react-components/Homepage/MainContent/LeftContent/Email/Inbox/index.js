import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NewEmail from './NewEmail'

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
    flexGrow: 1,
    // backgroundColor: 'rgba(52, 52, 52, 0.2)',
    borderRadius: '2%',
    minHeight: '380px',
    maxHeight: '30%',
    position: 'relative',
    width: "50%",
    display: "inline-block",
    wordBreak: "break-all",
  },
  tabs: {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      width: "auto",
  },
  tab: {
    height: "10px",
    width: "10px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
    margin: '5px',
  },
  keepFooter: {
    position: 'absolute',
    bottom: '0px',
    width: '100%'
  },
  footer: {
    width: '50%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  dots: {
    display: 'inline-flex',
    alignItems: 'center', 
  },
}));

export default function Inbox() {
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

  //Later we will get the New Unread Email From Gmail
  const [newEmails, setNewEmails] = useState(
    [
      {sender:"Edward Feng", date:"Mon 2020-03-02 9:05 PM", content:'Hey Pan and Team 27,\nSorry for the late reply and thank you for the email.\nYes, your current way of using Weather and Music Player APIs is fair! I will keep that in mind when marking your submission for Phase 1.\nGood luck! And remember to save some time to convert your project to React.\nBest regards,\nEdward Feng'},
      {sender:"Edward Feng", date:"Mon 2020-03-02 9:05 PM", content:'Hey Pan and Team 27,\nSorry for the late reply and thank you for the email.\nYes, your current way of using Weather and Music Player APIs is fair! I will keep that in mind when marking your submission for Phase 1.\nGood luck! And remember to save some time to convert your project to React.\nBest regards,\nEdward Feng'},
      {sender:"csc301", date:"2020-03-03 6:30 PM", content:"Hi"},
      {sender:"csc209", date:"2020-03-03 6:30 PM", content:"Hi"},
    ]
    );




  return (
    <div className={classes.root}>
      <Button onClick={(e) => handleMove(e, 0)}><ArrowBackIosIcon style={{color:'rgba(52, 52, 52)'}} /></Button>
      <Button onClick={(e) => handleMove(e, 1)}><ArrowForwardIosIcon style={{color:'rgba(52, 52, 52)'}} /></Button>
      {
      newEmails.map((newEmail, index) => (
          <TabPanel value={value} index={index}>
            <NewEmail sender = {newEmail.sender} date = {newEmail.date} content = {newEmail.content}> </NewEmail>
          </TabPanel>
        ))
        }
      <div className={classes.keepFooter}>
      <div className={classes.footer}>
      </div>
      </div>
    </div>
  );
}
