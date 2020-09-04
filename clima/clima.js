const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b45b29a12746f7d35a80fb7b7596cd45&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}