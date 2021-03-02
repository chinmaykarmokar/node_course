const request = require('request');

// WeatherStack API

const url = 'http://api.weatherstack.com/current?access_key=72cc81aef7b6b2ff259543f62741b155&query=19.0760,72.8777';

request({url: url, json: true}, (error,response) => {
	if (error) {
		console.log('Unable to connect to weather service.');
	} else if (response.body.error) {
		console.log('Unable to find location');
	} else {
		console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
	}
	
	// const data = JSON.parse(response.body);
	// console.log(data.current);
})

// Geocoding

const new_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiY2hpbm1heWthcm1va2FyIiwiYSI6ImNrbHNkczVucTFoMW0ydmxiMnhxZTE2ZGoifQ.8UtDw0iZ_OJTQTtTKt4kkw&limit=1';

request({url: new_url, json: true}, (error,response) => {
	if (error) {
		console.log('Unable to connect to weather service.');
	} else if (response.body.features.length === 0) {
		console.log('Unable to find location.');
	} else {
		console.log(response.body.features[0].center[0]);
		console.log(response.body.features[0].center[1]);
	}
	
	// const data = JSON.parse(response.body);
	// console.log(data.current);
})