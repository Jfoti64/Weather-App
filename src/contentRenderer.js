async function renderWeatherData(weatherData) {
  const weatherDescription = document.querySelector('.weather-description');
  const weatherLocation = document.querySelector('.weather-location');
  const weatherDate = document.querySelector('.weather-date');
  const weatherTime = document.querySelector('.weather-time');
  const weatherTemperature = document.querySelector('.weather-temperature-f');
  const weatherFeelsLike = document.getElementById('feels-like');
  const weatherHumidity = document.getElementById('humidity');

  weatherDescription.innerHTML = weatherData.conditionText;
  weatherLocation.innerHTML = weatherData.locationName;
  weatherDate.innerHTML = weatherData.formattedLocalDate;
  weatherTime.innerHTML = weatherData.formattedLocalTime;
  weatherTemperature.innerHTML = `${weatherData.temperature} F°`;
  weatherFeelsLike.innerHTML = weatherData.feelsLikeF;
  weatherHumidity.innerHTML = `${weatherData.humidity} %`;
}

export { renderWeatherData };
