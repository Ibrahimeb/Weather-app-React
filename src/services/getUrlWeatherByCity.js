import {urlBase,apikey} from "./../constanst/url_constanst"



const getUrlByCity = (city) =>(`${urlBase}?q=${city}&appid=${apikey}`)

export default getUrlByCity;