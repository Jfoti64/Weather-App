import './style.css';
import { getProcessedWeatherData } from './weatherInfo';

(async function log() {
  const info = await getProcessedWeatherData('boston');
  console.log(info);
})();
