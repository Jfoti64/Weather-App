import './style.css';
import './addEventListener';
import { getProcessedWeatherData, getProcessedForecastData } from './weatherInfo';
import { renderWeatherData, renderForecastData } from './contentRenderer';

// Show boston as default on page load.
async function defaultLocation() {
  try {
    const location = 'Boston';
    const weatherData = await getProcessedWeatherData(location);
    renderWeatherData(weatherData);

    const forecastData = await getProcessedForecastData(location);
    renderForecastData(forecastData);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
}
defaultLocation();
