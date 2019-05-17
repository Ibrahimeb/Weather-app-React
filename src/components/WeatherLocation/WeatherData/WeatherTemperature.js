import React from 'react';
import WeatherIcons from 'react-weathericons';
import propTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
    
} from './../../../constanst/weathers';
import './Styles.css'



const icons ={
    [CLOUD] : "cloud",
    [SUN] : "day-sunny",
    [RAIN] : "rain",
    [SNOW] : "snow",
    [THUNDER] : "day-thunderstore",
    [DRIZZLE] : "day-showers",

}

const iconSize = "4x"

const getWeatherIcon = weatherState =>{
    console.log(weatherState)
    const icon = icons[weatherState] 
    console.log(icon)
    if(icon)
    return <WeatherIcons className="wicon" name = {icon} size = {iconSize}/>
    else
    return <WeatherIcons className="wicon" name = {icons[SUN]} size = {iconSize}/>
}

const WeatherTemperature = ({temperature,weatherState})=>{
console.log(weatherState)
return <div className="WeatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{temperature}</span>
    <span className="temperatureType">{` C°`}</span>
</div>
};

WeatherTemperature.prototype = {
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string.isRequired
}

export default WeatherTemperature;