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

          const { temp } = data.main;
          const { name } = data;
          const { main } = data.weather[0];

          temperatureDegree.textContent = temp;
          locationTimezone.textContent = name;
          temperatureDescription.textContent = main;

          // icons
          let icon = document.querySelector(".icon");
          icon.src = `https://static01.nyt.com/images/2014/05/25/magazine/25wmt/mag-25WMT-t_CA0-articleLarge.jpg?quality=75&auto=webp&disable=upscale`;
        });
    });
  }
});
