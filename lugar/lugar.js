const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encoderURL = encodeURI(dir);
    //console.log(encoderURL);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encoderURL}.json?access_token=pk.eyJ1Ijoia3Jpc3RpYW4yNCIsImEiOiJjazdueWZ3YWgwM3dtM2ZtaXF1anlrMG1qIn0.1-xI6qv8ykxrHi_5m04J2g`
            //, headers: {
            //     'X-RapidAPI-Key': '1c7f860865msh567f4a5e59a92bfp1e480ejsnfaa1c9533bcd'
            // }
    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No se encontro la Ciudad ${dir}`);
    }

    const data = resp.data.features[0];

    const direccion = data.place_name;
    const lat = data.center[0];
    const lng = data.center[1];

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}