const path = require('path');
const hbs = require('hbs');

const express = require('express');

const app = express();

//For getting file paths
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

//Setup handlebars engine and views
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

//Static directory
app.use(express.static(publicDirectoryPath));

app.get('', (req,res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Chinmay Karmokar'
	});
})

app.get('/about', (req,res) => {
	res.render('about', {
		title: 'About',
		name: 'Chinmay Karmokar'
	});
})

app.get('/help', (req,res) => {
	res.render('help', {
		title: 'Help',
		note: 'See here for help',
		name: 'Chinmay M. K.'
	});
})

app.get('/weather', (req,res) => {
	res.send({
		forecast: "30 degrees",
		location: "Mumbai"
	});
});

app.get('/help/*', (req,res) => {
	res.render('404', {
		title: "404",
		error_msg: "Help article not found."
	});
})

app.get('*', (req,res) => {
	res.render('404', {
		title: "404",
		error_msg: "Page not found."
	});
});

app.listen(3000, () => {
	console.log('Server has started');
})






















//Comments:

/*app.get('', (req,res) => {
	res.send('<h1>Hello Chinmay</h1>');
});

app.get('/help', (req,res) => {
	res.send({
		name: "Chinmay",
		age: 18
	});
});

app.get('/about', (req,res) => {
	res.send('<h1>About page</h1>');
});*/