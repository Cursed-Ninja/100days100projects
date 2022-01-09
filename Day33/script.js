const inputText = document.querySelector(".search-box");
const searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
  var text = inputText.value;
  if (text === "") {
    return;
  }
  weather.fetchWeather(text);
});

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    var text = inputText.value;
    if (text === "") {
      return;
    }
    weather.fetchWeather(text);
  }
});

let weather = {
  apiKey: "0a33767817a36f737eedf8dd59482aee",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/w/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/hr";
    document.querySelector(".weather").classList.remove("loading");
  },
};

weather.fetchWeather("Delhi");
