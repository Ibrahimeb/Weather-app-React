import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'


import './Styles.css'


const WeatherData = ({data : {temperature,weatherstate,humidity,wind}}) =>{
console.log(weatherstate);
return<div className = "WeatherDataCont"> 
<WeatherTemperature temperature = {temperature}
 weatherState = {weatherstate}/>
<WeatherExtraInfo  humidity = {humidity}
 wind={wind} />
</div>
};

WeatherData.prototype = {
    data : PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherstate:PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }),
};

export default WeatherData;