const API_KEY = "TU_WPISZ_KLUCZ";

async function getTemperature(lat, lon) {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    const data = await res.json();
    console.log(data);
}

document.querySelector(".btnWeather").addEventListener("click", function () {
    getTemperature(25.3, 17.9)
});