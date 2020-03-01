import React, { useState } from "react";
import TimeWeather from "./TimeWeather";
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

import { makeStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
}));


export default function MainContent() {
  const classes = useStyles();
  //const [searchKey, setSearchKey] = useState('');


  return (
  <Grid className="mainContent">
    <TimeWeather></TimeWeather>
    <LeftContent></LeftContent>
    <RightContent></RightContent>
  </Grid>
  );
}