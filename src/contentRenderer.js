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

async function renderForecastData(processedForecastData) {
  // Should be able to use a for loop to populate all the forecast days.
  Object.keys(processedForecastData).forEach((dayKey) => {
    const dayData = processedForecastData[dayKey];

    // Select the outer element by its class name
    const dayElement = document.querySelector(`.${dayKey}`);

    const dayOfWeekElement = dayElement.querySelector('.forecast-daily-day');
    const dayTemperature = dayElement.querySelector('.forecast-daily-temperature');
    const dayIcon = dayElement.querySelector('.weatherIcon');

    dayOfWeekElement.innerHTML = dayData.dayOfWeek;
    dayTemperature.innerHTML = dayData.maxTempF;
    const imageUrl = `https:${dayData.icon}`; // Ensuring HTTPS is used if required
    console.log(imageUrl);
    dayIcon.src = imageUrl;
  });
}

export { renderWeatherData, renderForecastData };
