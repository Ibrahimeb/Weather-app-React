import React,{Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './Styles.css'
import {
    SNOW,
    RAIN
} from './../../constanst/weathers';


const location = "Toronto";
const apikey = "5ba471b883e2a4c3062ada19279517b0";
const urlBase = "api.openweathermap.org/data/2.5/weather";

const apiWeather = `http://${urlBase}?q=${location}&appid=${apikey}`;


const data = {
    temperature:30,
    weatherstate: SNOW,
    humidity:10,
    wind:'10 m/s'
}


const data2 = {
    temperature:15,
    weatherstate: RAIN,
    humidity:2,
    wind:'30 m/s'
}


class WeatherLocation extends Component{


    constructor(){
        super();
        this.state = {
            city : "Toronto, Canada",
            data : data
        }
    }

    handleUpdateClick = async () => {
        console.log(apiWeather);

        //fetch(apiWeather)

        fetch(apiWeather, {
            method: 'GET', // or 'PUT'
        }).then(resolve => resolve.json())
          .then(data => console.log(data))
          .catch(err => {
            console.log(err);
        })

        this.setState({
            data:data2
        });
    }

    render(){
        const {city,data} = this.state;
            return (
        <div className="WeatherLocationCont">
            <Location city = {city}/> 
            <WeatherData data = {data}/> 
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );
    };
}


export default WeatherLocation;