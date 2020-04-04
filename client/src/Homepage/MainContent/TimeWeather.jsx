import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import AcUnitIcon from '@material-ui/icons/AcUnit'; // snow icon
import WbSunnyIcon from '@material-ui/icons/WbSunny'; // sunny icon
import CloudIcon from '@material-ui/icons/Cloud'; // cloud icon
import Brightness3Icon from '@material-ui/icons/Brightness3'; // sunny moon icon
import NightsStayIcon from '@material-ui/icons/NightsStay'; // cloudly moon icon
import FlashOnIcon from '@material-ui/icons/FlashOn'; // thunder icon
import InvertColorsIcon from '@material-ui/icons/InvertColors'; // rain icon
import WavesIcon from '@material-ui/icons/Waves'; // mist icon

const log = console.log

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
  const [weatherLink, setWeatherLink] = useState()
  const [temp, setTemp] = useState('')

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
  
  
  const getWeatherInfo = async () => {
    let latitude;
    let longitude;
    log('getting weather info')

    const publicIp = require('public-ip');

    const ipAddress = await publicIp.v4()

    log(ipAddress)
    fetch('https://ipapi.co/' + ipAddress + '/json/')
      .then(resp => resp.json())
      .then(function(data){
        log("this is the data")
        log(data)
        latitude = data.latitude
        longitude = data.longitude

        const key = 'b670e8e2fd850cc641897211bf6a2252';
        log("latitude: " + latitude)
        log("longitude: " + longitude)
        setWeatherLink("https://darksky.net/forecast/" + latitude + "," + longitude + "/ca12/en");

        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + key)  
          .then(function(resp) { return resp.json() }) // Convert data to json
          .then(function(data) {
            const temp = Math.round(data.main.temp - 273.15)
            setTemp(temp)
          })
          .catch(function() {
          // catch any errors
            log('error in getting weather')
          });
          })
        .catch(function() {
          // catch any errors
          log('something bad happened in getting long/lat')
        });
  }

  const chooseIcon = () => {
    let date = new Date();
    let hh = date.getHours();
    console.log(hh)
    if (hh > 9 && hh < 18){
    if (temp < 0){
      return <AcUnitIcon className = {classes.weatherIcon} />
    }else if(temp < 9){
      return <CloudIcon className = {classes.weatherIcon} />
    }else if(temp < 15){
      return <WbSunnyIcon className = {classes.weatherIcon} />
    }else{
      return <Brightness3Icon className = {classes.weatherIcon} />
    }
  }else{
      return <NightsStayIcon className = {classes.weatherIcon} />

  }
}


  //For know, we will pase the city id of Toronto. Later, we will fetch the city id dependong on where the user is located.
  getWeatherInfo()
  updateTime()
  return (
    <div className={classes.timeWeather}>
      <Grid className={classes.weather}>
        <a href = {weatherLink} target="_blank">
          {chooseIcon()}
        </a>
        <div className = {classes.weatherValue}>{temp}&#176;C</div>
      </Grid>
      <div className={classes.time}>
        {hour} : {minute}
      </div>
    </div>
  );
}