const apiKey = "c898918ab6a9540a2476e93252967d57";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");

const searchBtn = document.querySelector(".search-box button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./image/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      z;
      weatherIcon.src = "./image/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./image/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "./image/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "./image/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
