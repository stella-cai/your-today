import React, { useState } from "react";
import TimeWeather from "./TimeWeather";
import LeftContent from "./LeftContent"

import { makeStyles } from '@material-ui/core/styles';


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
  <div className="mainContent">
    <TimeWeather></TimeWeather>
    <LeftContent>
    </LeftContent>
  </div>
  );
}