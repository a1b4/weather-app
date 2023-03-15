import './App.css';
import React  from 'react';
import LocationInput from './components/locationInput/index.js';
import WeatherDetails from './components/weatherDetails';


function App() {
  return (
    <div className="container">
      <LocationInput />
      <WeatherDetails />
    </div>
  )
}

export default App;
