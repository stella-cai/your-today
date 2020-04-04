import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Creation from './Creation'
import Request from './Request'
import Frozen from './Frozen'
import All from './All'
import Feedback from './Feedback'
import { mergeClasses } from '@material-ui/styles';
import {Middleware} from "../actions/middleware";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  tabs: {
    // width: '80%',
    marginLeft: '50px',
    marginRight: '50px',
    marginTop: '30px'
  },
  tab: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: '450px',
    overflowY: 'auto'
  },
  header: {
    backgroundColor: 'rgba(52, 52, 52)',
    color: 'white'
  }
}));

function accountsEqual(list1, list2){
  if(!list1 || !list2 || list1.length != list2.length)
    return false
  
  for(let i = 0; i < list1.length; i++){
    if(list1[i]._id !== list2[i]._id){
      return false
    }
  }
  
  return true
}

export default function AdminPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // lATER WE WILL FETCH ALL THE DATA FROM THE SERVER.

  // Recent Creation.
  const [creation, setCreation] = React.useState(
    [
      { id: 1, user: "Tom", date: "2020-03-03" },
      { id: 2, user: "Jack", date: "2020-03-02" },
    ]
  )

  // Recent Creation.
  const [request, setRequest] = React.useState(
    [
      { id: 3, user: "Lucy", reason: "I forgot my password", date: "2020-03-03" },
      { id: 4, user: "Maria", reason: "I registered my account last month.", date: "2020-03-02" },
    ]
  )


  // Frozen.
  // Feedback.
  const [frozen, setFrozen] = React.useState([])
  Middleware.getFrozenUsers().then(function(result) {
    console.log("comparing frozen users")
    console.log(result)
    console.log(frozen)
    if(!accountsEqual(result.accounts, frozen)) {
      console.log("setting result inside getFrozenUsers")
      setFrozen(result.accounts)
    }
  })

  // All Active Accounts.
  const [all, setAll] = React.useState([])

  Middleware.getActiveUsers().then(function(result) {
    // console.log(result)
    // console.log(all)
    if(!accountsEqual(result.users, all)) {
      console.log("setting result inside getActiveUsers")
      setAll(result.users)
    }
  })

  // Feedback.
  const [feedback, setFeedback] = React.useState(
    [
      { id: 1, user: "Jack", content: "Good" },
      { id: 2, user: "Jack", content: "Wonderful" },
      { id: 3, user: "Lucy", content: "So so" },
    ]
  )

  const removeFromScreen = (index, method, data) => {
    const newData = [...data];
    newData.splice(index, 1);
    // console.log(newData)
    method(newData);
  }

  const addToScreen = (method, data, item) => {
    const newData = [...data, item];
    method(newData);
  }



  return (
    <div classname={classes.root}>
      <Box className={classes.tabs}>
        <AppBar className={classes.header} position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="Admin Page Tabs"
          >
            <LinkTab label="Recent Creations" href="/" {...a11yProps(0)} />
            <LinkTab label="Requests" href="/" {...a11yProps(1)} />
            <LinkTab label="Frozen Accounts" href="/" {...a11yProps(2)} />
            <LinkTab label="All Accounts" href="/" {...a11yProps(3)} />
            <LinkTab label="Feedbacks" href="/" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className={classes.tab}>
          <Creation removeFromScreen={removeFromScreen} creation={creation} setCreation={setCreation}></Creation>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tab}>
          <Request removeFromScreen={removeFromScreen} request={request} setRequest={setRequest}></Request>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tab}>
          <Frozen all={all} setAll={setAll} addToScreen={addToScreen} removeFromScreen={removeFromScreen} frozen={frozen} setFrozen={setFrozen}></Frozen>
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tab}>
          <All frozen={frozen} setFrozen={setFrozen} addToScreen={addToScreen} removeFromScreen={removeFromScreen} all={all} setAll={setAll}></All>
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.tab}>
          <Feedback removeFromScreen={removeFromScreen} feedback={feedback} setFeedback={setFeedback}></Feedback>
        </TabPanel>
      </Box>
    </div>
  );
}
