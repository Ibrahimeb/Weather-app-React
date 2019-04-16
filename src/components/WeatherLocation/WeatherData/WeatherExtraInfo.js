import React from 'react';
import PropTypes from 'prop-types';
import './Styles.css'

const WeatherExtraInfo = ({humidity,wind})=>(
<div className  = "WeatherExtraInfoCont">
    <span className = "extraInfoText">{`humidity ${humidity} % -`}</span>
    <span className = "extraInfoText">{`wind ${wind}`}</span>

</div>
);

WeatherExtraInfo.prototype = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired,
}

export default WeatherExtraInfo;