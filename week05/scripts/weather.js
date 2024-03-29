const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=23e3d3f075b14bf9e985e3df0a52173b&units=imperial&lang=en';


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
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `icon for ${desc}`);
    captionDesc.textContent = desc.toUpperCase();
}


// my API key = '23e3d3f075b14bf9e985e3df0a52173b';
// const coords = '49.75, 6.64' 'Trier, Germany';
//Trier, Germany is located at 49.75° N latitude and 6.64° E longitude';
//Geo coords [49.7557, 6.6394]

