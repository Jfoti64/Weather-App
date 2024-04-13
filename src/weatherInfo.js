import { format, parseISO } from 'date-fns';

const key = '867cbe0340714515a3c110423241104';

async function getCurrentWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`
  );
  return response;
}

async function getForecastWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7`
  );
  return response;
}

async function getProcessedWeatherData(location) {
  const currentWeather = await getCurrentWeather(location);
  const currentWeatherData = await currentWeather.json();

  const forecastWeather = await getForecastWeather(location);
  const forecastWeatherData = await forecastWeather.json();

  const temperature = currentWeatherData.current.temp_f;
  const conditionText = currentWeatherData.current.condition.text;
  const locationName = currentWeatherData.location.name;
  const locationLocalTime = currentWeatherData.location.localtime;
  // Make date compliant with ISO formatting
  const adjustedDate = locationLocalTime.replace(' ', 'T').replace(/T(\d):/, 'T0$1:');
  const parsedDate = parseISO(adjustedDate);
  const formattedLocalDate = format(parsedDate, 'EEEE, MMMM do, yyyy');
  const formattedLocalTime = format(parsedDate, 'h:mm aaa');
  const feelsLikeF = currentWeatherData.current.feelslike_f;
  const { humidity } = currentWeatherData.current;

  console.log(currentWeatherData);
  console.log(forecastWeatherData);

  const processedWeatherData = {
    temperature,
    conditionText,
    locationName,
    formattedLocalDate,
    formattedLocalTime,
    feelsLikeF,
    humidity,
  };
  return processedWeatherData;
}

export { getCurrentWeather, getProcessedWeatherData, getForecastWeather };
