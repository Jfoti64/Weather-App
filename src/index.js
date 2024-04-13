import './style.css';
import './addEventListener';
import { getProcessedWeatherData } from './weatherInfo';
import { renderWeatherData } from './contentRenderer';


// Temp show boston as default on page load. 
async function temp() {
  try {
    const weatherData = await getProcessedWeatherData('boston');
    renderWeatherData(weatherData);
    console.log(weatherData);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
};
temp();
