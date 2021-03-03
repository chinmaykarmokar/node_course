const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];

if (!address) {
	console.log('No address provided. Please provide an address.')
} else {
	geocode(address, (error,{latitude, longitude, location}) => {
		console.log('Error',error);
		console.log('Data',location);

		forecast(longitude,latitude,(error,data) => {
			console.log('Error',error);
			console.log('Data',data);
		})
	})
}

// WeatherStack API

// const url = 'http://api.weatherstack.com/current?access_key=72cc81aef7b6b2ff259543f62741b155&query=19.0760,72.8777';

// request({url: url, json: true}, (error,response) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service.');
// 	} else if (response.body.error) {
// 		console.log('Unable to find location');
// 	} else {
// 		console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
// 	}
	
// 	// const data = JSON.parse(response.body);
// 	// console.log(data.current);
// })






