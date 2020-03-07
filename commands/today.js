const ora = require('ora')
const getWeather = require('../utilities/getweather')
const getLocation = require('../utilities/getlocation')

module.exports = async (args) => {
    const spinner = ora({
        spinner: {
            frames: ['🐢', '🦎', '🦄'],
            interval: 200, // Optional
        },
        prefixText: "Checking weather stations, govt sites and all those things...\n"
    }).start()

    try {
        const location = args.location || args.l || await getLocation()
        const weather = await getWeather(location)

        spinner.stop()

        console.log(`
        Current weather
         City: ${weather.data.location.name}
         Country: ${weather.data.location.country}

         Temperature: ${weather.data.current.temp_c}C
         Wind: ${weather.data.current.wind_kph} KM/H
         Visibility: ${weather.data.current.vis_km} KM`)
    } catch (err) {
        spinner.stop()
        console.error(err)
    }
}
