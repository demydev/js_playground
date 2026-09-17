//const API_KEY = '4f31e624bd29447003961cfe8a44105d';
//const CITY = 'Warsaw';
//const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;

async function getWeather(CITY) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=4f31e624bd29447003961cfe8a44105d`);
    if (!response.ok){
        console.error(`Error: ${response.status} ${response.statusText}`);
        return;
    }
    const data = await response.json();
    //console.log(JSON.stringify(data, null, 1))
    console.log(`Now in ${CITY} ${data.weather[0].main} and ${data.main.temp}°C`)
    
}

getWeather('Lodz');
