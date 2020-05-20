let weatherData;
const input = document.querySelector('.input');


async function getWeather() {
  const weatherAPI = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +input.value+"&APPID=c185e2fec5adf11f06c6284c2b78befc"
  );
  weatherData = await weatherAPI.json();
  console.log(weatherData);
  display()
  input.value = '';
  return weatherData;
}


const city = document.querySelector(".city");
const current = document.querySelector(".current");
const state = document.querySelector(".state");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const submit = document.querySelector("button");

submit.addEventListener("click", getWeather);

function display() {
  city.innerHTML = weatherData.name;
  current.innerHTML =
    "Current Temperature: " + Math.round(weatherData.main.temp - 273.15) + "°C";
  state.innerHTML = weatherData.weather[0].main;
  min.innerHTML =
    "Today's Low: " + Math.round(weatherData.main.temp_min - 273.15) + "°C";
  max.innerHTML =
    "Today's High: " + Math.round(weatherData.main.temp_max - 273.15) + "°C";
}
