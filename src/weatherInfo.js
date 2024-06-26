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
  const weatherIcon = currentWeatherData.current.condition.icon;
  const feelsLikeF = currentWeatherData.current.feelslike_f;
  const { humidity } = currentWeatherData.current;
  const chanceOfRain = forecastWeatherData.forecast.forecastday[0].day.daily_chance_of_rain;
  const windSpeedMph = currentWeatherData.current.wind_mph;

  const processedWeatherData = {
    temperature,
    conditionText,
    locationName,
    formattedLocalDate,
    formattedLocalTime,
    weatherIcon,
    feelsLikeF,
    humidity,
    chanceOfRain,
    windSpeedMph,
  };

  return processedWeatherData;
}

async function getProcessedForecastData(location) {
  try {
    const forecastWeather = await getForecastWeather(location);
    const forecastWeatherData = await forecastWeather.json();

    // Initialize an object to store forecast data for multiple days
    const processedForecastData = {};

    // Retrieve the number of days of forecast data
    const daysOfForecast = forecastWeatherData.forecast.forecastday.length;

    // Loop through each day of the forecast
    for (let i = 0; i < daysOfForecast; i += 1) {
      // Destructure the necessary data from each day's forecast
      const {
        date,
        day: {
          maxtemp_f: maxTempF,
          mintemp_f: minTempF,
          condition: { icon },
        },
      } = forecastWeatherData.forecast.forecastday[i];
      const dayOfWeek = format(parseISO(date), 'EEEE'); // Format the date as day of the week

      // Create a dynamic key for each day and store relevant data
      processedForecastData[`day${i + 1}`] = { dayOfWeek, maxTempF, minTempF, icon };
    }

    return processedForecastData;
  } catch (error) {
    console.error('Error processing forecast data:', error);
    throw error; // Rethrow or handle the error as appropriate
  }
}

export { getCurrentWeather, getProcessedWeatherData, getForecastWeather, getProcessedForecastData };
