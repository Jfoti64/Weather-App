import './style.css';
import './addEventListener';
import { getProcessedWeatherData, getProcessedForecastData } from './weatherInfo';
import { renderWeatherData, renderForecastData } from './contentRenderer';

// Temp show boston as default on page load.
async function temp() {
  try {
    const weatherData = await getProcessedWeatherData('boston');
    renderWeatherData(weatherData);

    const forecastData = await getProcessedForecastData('boston');
    renderForecastData(forecastData);

    console.log(forecastData);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
}
temp();
