import { API_KEY } from "./API_KEY.js";

const  handleAppWeather = async (url) => {

     const response = await fetch(url);
     if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
     }
     const data = await response.json();
     return data;
} 
    const city = `kigali`.toLocaleLowerCase();
   handleAppWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

     .then(data => {
          console.log(data);})
     .catch(error => {
          console.error('Error fetching weather data:', error);
     });
