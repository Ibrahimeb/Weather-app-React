import Convert from 'convert-units'
import {
    SNOW,
    RAIN,
    SUN
} from './../constanst/weathers';

const getWeatherState = (weather_data) =>{
    return SUN
}

const getTemp = (kelvin)=>{
    return Convert(kelvin).from("K").to("C").toFixed(2);
}

const getWeatherData = (weather_data) =>{
    const {humidity,temp} = weather_data.main;
    const {speed} =  weather_data.wind;
    const temperature = getTemp(temp);

       const data = {
        humidity,
        temperature,
        wind:`${speed} m/s`,
        weatherState: getWeatherState(weather_data)
    }

    return data;

}


export default getWeatherData;
