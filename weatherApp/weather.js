const  handleAppWeather = async (url) => {

     const response = await fetch(url);
     if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
     }
     const data = await response.json();
     return data;
} 
    const city = `kigali`.toLocaleLowerCase();
   handleAppWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=836f7ad72c0df906084ea36d91e29b93&units=metric`)

     .then(data => {
          console.log(data);})
     .catch(error => {
          console.error('Error fetching weather data:', error);
     });
