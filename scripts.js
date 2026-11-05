
async function getForecast(lat, lon) {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    const data = await res.json();
    if(!data.ok) {
        console.error("error: ", res.status);
    }
    console.log(data);
}

async function getCurrentWeather(lat, lon) {
    var xhttp = new XMLHttpRequest();
}

document.querySelector(".btnWeather").addEventListener("click", function () {
    getForecast(53, 52);
});