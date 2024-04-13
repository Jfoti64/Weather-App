const key = '867cbe0340714515a3c110423241104';
async function getCurrentWeather(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`);
    const weatherData = await response.json();
    return weatherData.current.condition.text;
}

export { getCurrentWeather };
