import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';


const strToComponents = cities =>(
    cities.map(item => <WeatherLocation key = {item} city={item} /> )
)

const LocationList=({cities}) => {
    console.log(cities)
    return <div>
       {strToComponents(cities)}
    </div>
}

LocationList.prototype = {
    cities: PropTypes.array.isRequired,
}


export default LocationList;