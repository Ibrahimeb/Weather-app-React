import React,{Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './Styles.css'
import {
    SNOW,
    RAIN,
    SUN
} from './../../constanst/weathers';


const location = "Toronto";
const apikey = "5ba471b883e2a4c3062ada19279517b0";
const urlBase = "http://api.openweathermap.org/data/2.5/weather";

const apiWeather = `${urlBase}?q=${location}&appid=${apikey}`;


const data = {
    temperature:30,
    weatherstate: SNOW,
    humidity:10,
    wind:'10 m/s'
}





class WeatherLocation extends Component{




    constructor(){
        super();
        this.state = {
            city : "Toronto, Canada",
            data : data
        }
    }

    getWeatherState = (weather_data) =>{
        return SUN

    }

    getWeatherData = weather_data =>{
        const {humidity,temp} = weather_data.main;
        const {speed} =  weather_data.wind;
        

           const data = {
            humidity,
            temperature:temp,
            wind:`${speed} m/s`,
            weatherState: this.getWeatherState(weather_data)
        }

        return data;

    }


    handleUpdateClick = () => {
        fetch(apiWeather, {
            method: 'GET', 
        }).then(resolve => resolve.json())
          .then(data =>{ 
              const newWeather = this.getWeatherData(data)
              console.log(newWeather)
              debugger
            this.setState({
                data:newWeather
            })            
          })
          .catch(err => {
            console.log(err);
        })

       
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