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
          if (main == "Rain") {
            icon.src =
              "https://icons-for-free.com/iconfiles/png/128/cloud+inkcontober+rain+icon-1320183879572378692.png";
          } else if (main == "Clouds") {
            icon.src =
              "https://icons-for-free.com/iconfiles/png/128/cloudy+foggy+weather+icon-1320196574869514194.png";
          } else if (main == "Clear") {
            icon.src =
              "https://icons-for-free.com/iconfiles/png/128/spring+summer+sun+sunny+weather+icon-1320195255197893733.png";
          } else {
            icon.src =
              "https://icons-for-free.com/iconfiles/png/128/rain+rainbow+sign+sunny+weather+icon-1320196636747000582.png";
          }
        });
    });
  }
});
