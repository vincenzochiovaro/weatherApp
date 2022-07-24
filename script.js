window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d92ad91a578263c82adbb54b753f6b36&units=metric`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          const { temp } = data.main;
          const { name } = data;
          const { main } = data.weather[0];

          temperatureDegree.textContent = temp;
          locationTimezone.textContent = name;
          temperatureDescription.textContent = main;

          // icons
          let icon = document.querySelector(".icon");
          if (main == "Rain") {
            icon.src =
              "https://icons-for-free.com/download-icon-clouds+rain+rainy+weather+icon-1320196492721656738_512.png";
          } else if (main == "Clouds") {
            icon.src =
              "https://cdn-icons-png.flaticon.com/512/3313/3313908.png";
          } else if (main == "Clear") {
            icon.src =
              "https://www.clipartmax.com/png/middle/66-662992_weather-clear-sky-weather-symbol.png";
          } else {
            icon.src = "https://static.thenounproject.com/png/3541594-200.png";
          }
        });
    });
  }
});
