var searchBtn = document.querySelector("#search-btn");
var searchBar = document.querySelector("#search-bar");
var temperature = document.querySelector("#temperature");
var condition = document.querySelector("#condition");
var city = document.querySelector("#city");
var humidity = document.querySelector("#humidity");
var windspeed = document.querySelector("#windspeed");
var currentImg = document.querySelector(".current-weather-img")
var futureCard = document.querySelectorAll(".future")
var futureTemp = document.querySelectorAll(".future-temp")
var futureDate = document.querySelectorAll(".future-date")
var futureImg = document.querySelectorAll("#futureimg")
var futureHumidity = document.querySelectorAll(".future-humidity")
var apiKey = "dd935dc2c8ab3520b53d9389d0e160b9";


function getWeatherData(cityName) {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      currentImg.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
       temperature.textContent = `${Math.floor(data.main.temp)}°F`;
       condition.textContent = data.weather[0].main;
       location.textContent = data.name;
       humidity.textContent = `${data.main.humidity}%`;
       windspeed.textContent = data.wind.speed;
    });
}

searchBtn.addEventListener("click", () => {
  var cityName = searchBar.value;
  console.log(cityName)
  getWeatherData(cityName);
  getForecastData(cityName)
});

function getForecastData(cityName) {
  url =
   `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for(let i = 0; i < futureCard.length; i++) {
        const index = i * 8 + 4;
        futureImg[i].setAttribute("src", `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@2x.png`)
        futureTemp[i].innerHTML = `${Math.floor(data.list[index].main.temp)}°F`
        
        futureHumidity[i].innerHTML = data.list[index].main.humidity + "%"
      }
     console.log(data)

    });
}

// // // URL is https://openweathermap.org/img/wn/10d@2x.png ----> icon url for openweather map
