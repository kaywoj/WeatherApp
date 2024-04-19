function getTheForecast() {
  var zipCode = document.getElementById('zipCodeInput').value;
  fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},us&appid=0c2c7ec5ee52f82faa8ec9340553c3e8&units=imperial`)
    .then(response => response.json())
    .then(data => {
      var lat = data.lat;
      var lon = data.lon;
      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=0c2c7ec5ee52f82faa8ec9340553c3e8&units=imperial`);
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('forecastOutput').innerText = JSON.stringify(data, null, 2);
    });
}

document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  getTheForecast();
});

  
