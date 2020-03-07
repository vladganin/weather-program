# Weather-Program

Weather-Program is a CLI script for retrieving the current weather data for the default IP location or the one specified by user.

## Installation
The script was not packaged.

So installation manually on your private PC:

Copy all project files to some folder.
In the project directory install needed modules:
npm install ora
npm install axios
npm install minimist

## Usage

1. Add your private API key for the current weather before using the script!
Get API key here (FREE after registration) :

http://api.weatherapi.com

Open file getweather.js (./utilities/getweather.js) and add your API key:

"url": `http://api.weatherapi.com/v1/current.json?key=${'YOUR API KEY HERE'}&q=${location}`

2. Link this project to your global NPM so to use script from terminal from any location:
Go to the Weather-Program project directory and open Terminal:
npm link


3. How to use? Open Terminal and write:
weather today  -> gives weather data for your city
weather help today -> give help for today command
weather today --location "CITY"    -> gives weather data for the CITY


## License
[MIT](https://choosealicense.com/licenses/mit/)