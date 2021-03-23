const path = require('path');

const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname,'../public');

app.set('view engine','hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req,res) => {
	res.render('index');
})

app.get('/weather', (req,res) => {
	res.send({
		forecast: "30 degrees",
		location: "Mumbai"
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