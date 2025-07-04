import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react"

export default function WeatherApp(){
const [weatherInfo, setWeatherInfo] = useState({
    city: "WonderLand",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    humidity: 47,
    weather: "haze",
})

let updateInfo = (result) =>{
    setWeatherInfo(result);
}

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather Widget</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    )
}