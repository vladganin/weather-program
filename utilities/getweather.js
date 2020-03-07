const axios = require('axios')


module.exports = async (location) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const results = await axios({
        method: "GET",
        "url": `http://api.weatherapi.com/v1/current.json?key=${''}&q=${location}`,
    })
    return results;
}