import './style.css';
import { getCurrentWeather } from './weatherInfo';

const currentWeather = getCurrentWeather('miami');

console.log(currentWeather);