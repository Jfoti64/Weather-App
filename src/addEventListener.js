import { getProcessedWeatherData } from './weatherInfo';

const form = document.getElementById('locationInputForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const locationInput = document.getElementById('locationInput').value;
  try {
    const weatherData = await getProcessedWeatherData(locationInput);
    console.log(weatherData);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
});