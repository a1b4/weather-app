const getWeather = (location) => {
 // http://api.weatherapi.com/v1/current.json?key=4662f115437042bb9f811142231503&q=London&aqi=no
  return {
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1678842774,
        "localtime": "2023-03-15 1:12"
    },
    "current": {
        "last_updated_epoch": 1678842000,
        "last_updated": "2023-03-15 01:00",
        "temp_c": 3.0,
        "temp_f": 37.4,
        "is_day": 0,
        "condition": {
            "text": "Clear",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
            "code": 1000
        },
        "wind_mph": 4.3,
        "wind_kph": 6.8,
        "wind_degree": 290,
        "wind_dir": "WNW",
        "pressure_mb": 1014.0,
        "pressure_in": 29.94,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 87,
        "cloud": 0,
        "feelslike_c": -0.1,
        "feelslike_f": 31.9,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 1.0,
        "gust_mph": 10.5,
        "gust_kph": 16.9
    }
  }
}
export default getWeather;