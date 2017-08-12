var axios = require('axios');

const APIKEY = 'fdac5e7b77f6a0c4fac15c68236dbde3';


module.exports = {
 get5DayForecast: function(cityName) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&type=accurate&APPID=${APIKEY}&cnt=5`)
    .then(function (res) {
      return res.data;
    });
  }
}
