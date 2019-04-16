import React,{Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './Styles.css'
import {
    SNOW,
    RAIN
} from './../../constanst/weathers';


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

    handleUpdateClick = ()=>{
        console.log("actualizado");
        this.setState({
            data:data2
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