
import Forecast from '../src/Forecast/Forecast';
import { useState, useEffect } from "react";

function App() {

  const [location, setLocation] = useState()

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      console.log(position.coords.latitude, position.coords.longitude);
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
