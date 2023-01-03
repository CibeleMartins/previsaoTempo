
import axios from 'axios';
import Forecast from '../src/Forecast/Forecast';
import { useState, useEffect } from "react";

function App() {

  const [location, setLocation] = useState()
  const [data, setData] = useState()

  let getWeather = async (lat, long)=> {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt&appid=${process.env.REACT_APP_API_KEY}`).then((response)=> {
      const res = response.data
      console.log(res)
      setData(res)
    }).catch((error)=> {
      console.log(error.message)
    })

    console.log(data)
  }

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  return ( 
    <div className="App">
      <Forecast/>
    </div>
  );
}

export default App;
