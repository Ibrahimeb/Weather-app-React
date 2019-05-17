import Convert from 'convert-units'
import {
    SNOW,
    RAIN,
    SUN,
    CLOUD,
    THUNDER,
    DRIZZLE

} from './../constanst/weathers'

const getWeatherState = (weather) =>{
    const {id} = weather
    console.log(`getWeatherState id state weather--> ${id}`)

    if (id < 300)
    return THUNDER;
    else if (id<400)
    return DRIZZLE
    else if (id<600)
    return RAIN
    else if (id<700)
    return SNOW
    else if(id ===800)
    return SUN
    else
    return CLOUD

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
        weatherState: getWeatherState(weather_data.weather[0])
    }

    return data;

}


export default getWeatherData;
