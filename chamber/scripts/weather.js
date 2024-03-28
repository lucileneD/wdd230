// GET CURRENT WEATHER DATA AND DISPLAY TO WIDGET
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const chill = document.querySelector("#chill");
const speed = document.querySelector('#speed');
const forecast = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&appid=23e3d3f075b14bf9e985e3df0a52173b&units=imperial&lang=en';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    // Clear existing forecast content
    forecast.innerHTML = '';

    // Display current weather
    const currentWeather = data.list[0];
    currentTemp.innerHTML = `${Math.trunc(currentWeather.main.temp)} &deg;F`;
    speed.innerHTML = `${currentWeather.wind.speed} mph`;
    chill.innerHTML = `${currentWeather.main.feels_like} &deg; F`;
    const iconsrc = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
    let desc = currentWeather.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `icon for ${desc}`);

    // Get today's date
    const today = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Loop through forecast data to display forecast for each day
    for (let i = 8; i < 26; i += 8) { // Loop only for 3 days (i.e., 8, 16, 24)
        const forecastDay = data.list[i];
        const forecastDate = new Date(forecastDay.dt_txt);

        // Calculate day of the week for the forecast item
        const dayOfWeek = dayNames[(today.getDay() + Math.floor(i / 8)) % 7];
        
        // Create elements to display forecast
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <h4>${dayOfWeek}</h4>
            <p>${Math.trunc(forecastDay.main.temp)} &deg;F</p>
            <img src="https://openweathermap.org/img/w/${forecastDay.weather[0].icon}.png" alt="${forecastDay.weather[0].description}">
        `;
        
        // Append forecast item to forecast container
        forecast.appendChild(forecastItem);
    }
}
