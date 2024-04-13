

async function renderWeatherData(weatherData) {
  const weatherDescription = document.querySelector('.weather-description');
  const weatherLocation = document.querySelector('.weather-location');
  const weatherDate = document.querySelector('.weather-date');
  const weatherTime = document.querySelector('.weather-time');
  const weatherTemperature = document.querySelector('.weather-temperature-f');

  weatherDescription.innerHTML = weatherData.conditionText;
  weatherLocation.innerHTML = weatherData.locationName;
  weatherDate.innerHTML = weatherData.locationLocalTime;
  weatherTime.innerHTML = weatherData.locationLocalTime;
  weatherTemperature.innerHTML = `${weatherData.temperature} F°`;
}

export { renderWeatherData };
