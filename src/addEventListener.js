import { getProcessedWeatherData, getProcessedForecastData } from './weatherInfo';
import { renderWeatherData, renderForecastData } from './contentRenderer';

const form = document.getElementById('locationInputForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const locationInput = document.getElementById('locationInput').value;
  try {
    const weatherData = await getProcessedWeatherData(locationInput);
    renderWeatherData(weatherData);

    const forecastData = await getProcessedForecastData(locationInput);
    renderForecastData(forecastData)

    console.log(forecastData);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
});
