import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import getUrlByCity from "./../../services/getUrlWeatherByCity"
import {PropTypes} from "prop-types"
import transformWeather from './../../services/TransformWeather'
import Location from './Location'
import WeatherData from './WeatherData'
import './Styles.css'

class WeatherLocation extends Component{

    constructor(props){
        super(props);


      const  {city} = props;
        this.state = {
            city ,
            data : null
        }
    }

   componentDidMount(){
       this.handleUpdateClick();
   }

    handleUpdateClick = () => {
        const url = getUrlByCity(this.state.city)
        console.log(url);
        fetch(url, {
            method: 'GET', 
        }).then(resolve => resolve.json())
          .then(data =>{ 
              const newWeather = transformWeather(data)
              console.log(newWeather)
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
            {
                data ? <WeatherData data = {data}/>:
                <CircularProgress className="CircularProgress" size= {50} />
            }
        
        </div>
        );
    };
}

WeatherLocation.proptype={
   city: PropTypes.string.isRequired,
}
export default WeatherLocation;