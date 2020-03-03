import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Todos from "../Todos"
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
  },
  tabs: {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      width: "auto",
  },
  tab: {
    height: "25px",
    width: "25px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMove = (event, type) => {
      //type = 0 => Move Left, type = 1 => Move Right
      if(value == 0 && type == 0) {
          alert("Already Leftmost")
      }
      else if (value == 2 && type == 1) {
        alert("Already Rightmost")
      }
      else if(type == 0) {
          setValue(value - 1);
      }
      else if(type == 1) {
          setValue(value + 1);
      }
  };

  const handleSwitch = (event, index) => {
    //type = 0 => Move Left, type = 1 => Move Right
    event.target.style.backgroundColor = "#000";
    setValue(index);
};

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="1" {...a11yProps(0)} />
          <Tab label="2" {...a11yProps(1)} />
          <Tab label="3" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Todos></Todos>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Focus
      </TabPanel>
      <TabPanel value={value} index={2}>
        Email
      </TabPanel>
      <Button onClick={(e) => handleMove(e, 0)}><ArrowBackIcon></ArrowBackIcon></Button>
      <Button onClick={(e) => handleMove(e, 1)}><ArrowForwardIcon></ArrowForwardIcon></Button>
      <span class={classes.tab} onClick={(e) => handleSwitch(e, 0)}></span>
      <span class={classes.tab} onClick={(e) => handleSwitch(e, 1)}></span>
      <span class={classes.tab} onClick={(e) => handleSwitch(e, 2)}></span>
    </div>
  );
}
