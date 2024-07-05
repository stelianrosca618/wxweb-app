import axios from 'axios';
const apiProd = 'http://164.92.67.83:4000/'
const apiLocal = 'http://localhost:4000/'
export const getWeatherData = async () => {
    let weatherData = null;
    await axios({
        method:'post',
        url: `${apiProd}/wximgs/readWeatherData`,
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
        url: `${apiProd}/wximgs/readWeadtheTrends`,
        data: {},
      }).then(function (response) {
        trendsData = response.data;
      }).catch(function (error) {
        trendsData = [];
        console.log('errors', error)
      })

    return trendsData;
}