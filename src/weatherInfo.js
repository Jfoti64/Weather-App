import { format, parseISO } from 'date-fns';

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
  const temperature = weatherData.current.temp_f;
  const conditionText = weatherData.current.condition.text;
  const locationName = weatherData.location.name;
  const locationLocalTime = weatherData.location.localtime;

  const adjustedDate = locationLocalTime.replace(' ', 'T').replace(/T(\d):/, 'T0$1:');
  const parsedDate = parseISO(adjustedDate);
  const formattedLocalDate = format(parsedDate, 'EEEE, MMMM do, yyyy');
  const formattedLocalTime = format(parsedDate, 'h:mm aaa');

  const processedWeatherData = {
    temperature,
    conditionText,
    locationName,
    formattedLocalDate,
    formattedLocalTime,
  };
  return processedWeatherData;
}

export { getCurrentWeather, getProcessedWeatherData };
