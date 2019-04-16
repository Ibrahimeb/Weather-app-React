import React from 'react';
import WeatherIcons from 'react-weathericons';
import propTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../../constanst/weathers';
import './Styles.css'



const icons ={
    [CLOUD] : "cloud",
    [CLOUDY] : "cloudy",
    [SUN] : "sun",
    [RAIN] : "rain",
    [SNOW] : "snow",
    [WINDY] : "windy"

}

const iconSize = "4x"

const getWeatherIcon = weatherState =>{
    console.log(weatherState)
    const icon = icons[weatherState] 
    console.log(icon)
    if(icon)
    return <WeatherIcons className="wicon" name = {icon} size = {iconSize}/>
    else
    return <WeatherIcons className="wicon" name = {'day-sunny'} size = {iconSize}/>
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