import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Todos} from "./Todos";
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Focus} from "./Focus";
import {Email} from "./Email";

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
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    borderRadius: '2%',
    minHeight: '380px',
    maxHeight: '400px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  // tabs: {
  //     backgroundColor: "rgba(0, 0, 0, 0.0)",
  //     width: "auto",
  // },
  tabs: {
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexgrow: 5,
    height: '60%',
    minWidth: '100%'
  },
  tab: {
    height: "10px",
    width: "10px",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    borderRadius: "50%",
    display: "inlineblock",
    margin: '5px',
  },
  tabPanel: {
    minWidth: '90%',
    margin: '0 auto',
    padding: '0'
  },
  keepFooter: {
    position: 'absolute',
    height: '15%',
    bottom: '0px',
    width: '100%', 
    flexgrow: 1
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
  button: {
    //  color: '#bbb' 
  },
  // todos: {
  //   margin: '0 auto',
  //   padding: '0'
  // },
  button:{
    color: 'rgba(52, 52, 52, 0.5)'
  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [countdown, setCountdown] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMove = (event, type) => {
    //type = 0 => Move Left, type = 1 => Move Right
    if (value == 0 && type == 0) {
      alert("Already Leftmost")
    }
    else if (value == 2 && type == 1) {
      alert("Already Rightmost")
    }
    else if (type == 0) {
      setValue(value - 1);
    }
    else if (type == 1) {
      setValue(value + 1);
    }
  };

  const handleSwitch = (event, index) => {
    //type = 0 => Move Left, type = 1 => Move Right
    // event.target.style.backgroundColor = "#000";
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        <TabPanel className={classes.tabPanel} value={value} index={0}>
          <Focus setCountdown={setCountdown} countdown={countdown}></Focus>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Todos className={classes.tabPanel} todos = {props.todos} setTodos = {props.setTodos}></Todos>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Email setReadPosition={props.setReadPosition} readPosition={props.readPosition} deleteMessage={props.deleteMessage} ws={props.ws} className={classes.tabPanel} messages = {props.messages} username = {props.username}></Email>
        </TabPanel>
      </div>
      <div className={classes.keepFooter}>
        <div className={classes.footer}>
          <Button onClick={(e) => handleMove(e, 0)}><ArrowBackIosIcon className={classes.button} /></Button>
          <span className={classes.dots}>
            <span className={classes.tab} onClick={(e) => handleSwitch(e, 0)}></span>
            <span className={classes.tab} onClick={(e) => handleSwitch(e, 1)}></span>
            <span className={classes.tab} onClick={(e) => handleSwitch(e, 2)}></span>
          </span>
          <Button onClick={(e) => handleMove(e, 1)}><ArrowForwardIosIcon className={classes.button} /></Button>
        </div>
      </div>
    </div>
  );
}
