async function renderWeatherData(weatherData) {
  const weatherDescription = document.querySelector('.weather-description');
  const weatherLocation = document.querySelector('.weather-location');
  const weatherDate = document.querySelector('.weather-date');
  const weatherTime = document.querySelector('.weather-time');
  const weatherTemperature = document.querySelector('.weather-temperature-f');
  const weatherFeelsLike = document.getElementById('feels-like');
  const weatherHumidity = document.getElementById('humidity');
  const weatherChanceOfRain = document.getElementById('chance-of-rain');
  const weatherWindMph = document.getElementById('wind-speed');

  weatherDescription.innerHTML = weatherData.conditionText;
  weatherLocation.innerHTML = weatherData.locationName;
  weatherDate.innerHTML = weatherData.formattedLocalDate;
  weatherTime.innerHTML = weatherData.formattedLocalTime;
  weatherTemperature.innerHTML = `${weatherData.temperature} F°`;
  weatherFeelsLike.innerHTML = weatherData.feelsLikeF;
  weatherHumidity.innerHTML = `${weatherData.humidity} %`;
  weatherChanceOfRain.innerHTML = `${weatherData.chanceOfRain} %`;
  weatherWindMph.innerHTML = `${weatherData.windSpeedMph} mph`;
}

async function renderForecastData(forecastData) {
  
  // Select the outer element by its class name
  const outerElement = document.querySelector('.current-day-plus-0');

  // Find the inner element within the outer element
  const innerElement = outerElement.querySelector('.forecast-daily-day');

  innerElement.innerHTML = forecastData.day1.dayOfWeek;
}

export { renderWeatherData, renderForecastData };
