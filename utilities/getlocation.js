const axios = require('axios')


module.exports = async () => {
    const results = await axios({
        method: 'get',
        url: 'https://ipapi.co/json/',
    })
    return `${results.data.city}`
}
