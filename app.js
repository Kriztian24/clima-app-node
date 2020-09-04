const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la cuidad para optener el clima',
            demand: true
        }
    }).argv;


// console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

// clima.getClima(40.70, -74.00)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {
    try {
        const cords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cords.lat, cords.lng);

        return `El clima de ${cords.direccion} es de ${temp}°C`;
    } catch (e) {
        return `No se pudo pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);