//Complete the Weather API Backend part using openweathermap api
let get_data = () => {
  const city = document.getElementById("city").value; // Replace with your desired city
  const apiKey = "6fc5235db8104a829623778767525c1c"; // Replace with your OpenWeather API key
  let cityName = document.getElementById("cityName");
  let temp = document.querySelector(".temp");
  //   let hi_low = document.querySelector(".hi-low");
  let weather = document.querySelector(".weather");

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod === "404" || city === "") {
        throw new Error("City not found");
      }

      temp_value = Math.round(data.main.temp - 273.15);
      cityName.innerText = `${data.name}+${data.sys.country}`;
      temp.innerText = `${temp_value}C`;
      weather.innerText = `${data.weather[0].main}`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      if (error.message === "City not found") {
        cityName.innerText = "City not found";
        temp.innerText = "";
        weather.innerText = "";
      }
    });
};
console.log("hello");
