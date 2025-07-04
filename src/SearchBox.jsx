import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import {useState} from "react";


export default function SearchBox({ updateInfo}) {
  let [city, setCity] = useState("");
    let [error, setError] = useState(false);
  const API_URL = "http://api.openweathermap.org/geo/1.0/direct"
  const API_KEY = "c40b000bfe1b1944dd9b2f2d59f767bd";
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"


  let getWeatherInfo = async () =>{
    try{
    let geoCodeResponse = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let geoCodeJsonResponse = await geoCodeResponse.json();
    let Lat = `${geoCodeJsonResponse[0].lat}`;
    let Lon = `${geoCodeJsonResponse[0].lon}`;
    let weatherResponse = await fetch(`${WEATHER_URL}?lat=${Lat}&lon=${Lon}&appid=${API_KEY}&units=metric`);
    let weatherJsonResponse = await weatherResponse.json();
    let result = {
        city: city,
        temp: weatherJsonResponse.main.temp,
        tempMin : weatherJsonResponse.main.temp_min,
        tempMax : weatherJsonResponse.main.temp_max,
        humidity : weatherJsonResponse.main.humidity,
        feelsLike : weatherJsonResponse.main.feels_like,
        weather : weatherJsonResponse.weather[0].description
    }
    console.log(result);
    return result;
    }catch(err){
        throw err;
    }
  }

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) =>{
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }catch(err){
        setError(true);
    }
  }

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Send
        </Button>
        {error && <p style={{color: "red"}}>No such place exists!</p>}
      </form>
    </div>
  );
}
