const menus = {
    main: `
    weather [command] <options>

    today   ...... show weather for today
    help    ...... show help menu
    version ...... show package version
    forecast ..... show forecast for 7 days
    `,

    today: `
    weather today <options>


    --location, -l ...... location to use`,

    forecast: `
    weather forecast <options>

    This gives you the weather forecast for the <city>.
    --location, -l ...... location to use
    `
}


module.exports = (args) => {
    const subCommand = args._[0] === 'help' ? args._[1] : args._[0]
    console.log(menus[subCommand] || menus.main)
}