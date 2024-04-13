const key = '867cbe0340714515a3c110423241104';

async function getCurrentWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`
  );
  return response;
}

async function getProcessedWeatherData(location) {
  const response = await getCurrentWeather(location);
  const weatherData = await response.json();
  console.log(weatherData);
  const temperature = weatherData.current.temp_f;
  const conditionText = weatherData.current.condition.text;
  const locationName = weatherData.location.name;
  const locationLocalTime = weatherData.location.localtime;
  const processedWeatherData = { temperature, conditionText, locationName, locationLocalTime };
  console.log(processedWeatherData.locationLocalTime);
  return processedWeatherData;
}

export { getCurrentWeather, getProcessedWeatherData };
