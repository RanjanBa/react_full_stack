const request = require('request-promise')

const API_KEY = '69446765ef42de0420a3fc087c2f91b6';

class Weather {
    static retrieveByCity(city, callback) {
        request({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json:true
        }).then(function(res) {
            callback(res);
        }).catch(function(err) {
            console.log(err);
            callback({
                error: 'Could not reach OpenWeatherMap API.'
            });
        });
    }
}

module.exports = Weather;