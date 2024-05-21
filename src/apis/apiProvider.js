import axios from 'axios';

export const getWeatherData = async () => {
    let weatherData = null;
    await axios({
        method:'post',
        url: 'http://localhost:4000/wximgs/readWeatherData',
        data: {},
      }).then(function (response) {
        weatherData = response.data;
      }).catch(function (error) {
        weatherData = null;
        console.log('errors', error)
      })

    return weatherData;
}

export const getWeatherTrends = async () => {
    let trendsData = [];
    await axios({
        method:'post',
        url: 'http://localhost:4000/wximgs/readWeadtheTrends',
        data: {},
      }).then(function (response) {
        trendsData = response.data;
      }).catch(function (error) {
        trendsData = [];
        console.log('errors', error)
      })

    return trendsData;
}