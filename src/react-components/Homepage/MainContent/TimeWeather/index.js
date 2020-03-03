import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  timeWeather: {
    textAlign: 'center'
  },
  weatherIcon: {
    display: 'inline-block',
    fontSize: '70px',
    verticalAlign: 'middle',
    color: "white"
  },
  weatherValue: {
    display: 'inline-block',
    fontSize: '37px',
    fontWeight: 'bold',
    color: 'white'
  },

  time: {
    fontFamily: 'Advent Pro',
    fontSize: '70px',
    color: "white"
  },
  weather: {
    display: 'inline-block'
  },
}));


export default function TimeWeather() {
  const classes = useStyles();
  const [hour, setHour] = useState()
  const [minute, setMinute] = useState()

  const [temp, setTemp] = useState('');

  const updateTime = () => {
    setInterval(
      function(){
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        if (hh < 10) {
          hh = '0' + hh;
        }
        if (mm < 10) {
          mm = '0' + mm;
        }
        setHour(hh)
        setMinute(mm)
      }, 1000
    )
  } 
  
  
  const getWeatherInfo = (cityID) => {
    const key = 'b670e8e2fd850cc641897211bf6a2252';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      const temp = Math.round(data.main.temp - 273.15)
      setTemp(5)
    })
    .catch(function() {
    // catch any errors
    });
  }

  //For know, we will pase the city id of Toronto. Later, we will fetch the city id dependong on where the user is located.
  getWeatherInfo(6167865)
  updateTime()
  return (
    <div className={classes.timeWeather}>
      <Grid className={classes.weather}>
        <AcUnitIcon className = {classes.weatherIcon}></AcUnitIcon>
        <div className = {classes.weatherValue}>{temp}&#176;C</div>
      </Grid>
      <div className={classes.time}>
        {hour} : {minute}
      </div>
    </div>
  );
}