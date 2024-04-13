import { getProcessedWeatherData } from './weatherInfo';
import { renderWeatherData } from './contentRenderer';

const form = document.getElementById('locationInputForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const locationInput = document.getElementById('locationInput').value;
  try {
    const weatherData = await getProcessedWeatherData(locationInput);
    renderWeatherData(weatherData);
    console.log(weatherData);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
});
