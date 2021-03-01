const validator = require('validator');
const text_color = require('chalk');
const yargs = require('yargs');
const text = require('./notes.js');

//console.log(process.argv);

// Customize yargs version:

yargs.version('1.1.0');

// Create add Command:
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note Body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function (argv) {
		//console.log('Adding a new note...!', argv);
		console.log('Title: ' + argv.title);
		console.log('Body: ' + argv.body);
	}
})

// Create remove Command:
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function () {
		console.log('Removing a note.')
	}
})

// Create list Command:
yargs.command({
	command: 'list',
	describe: 'Listing out a note',
	handler: function () {
		console.log('Listing out a note.')
	}
})

// Create read Command:
yargs.command({
	command: 'read',
	describe: 'Reading a note',
	handler: function () {
		console.log('Reading a note.')
	}
})


console.log(yargs.argv);



// References:

// const command = process.argv[2];

// if (command === 'add') {
// 	console.log('Adding Note...!');
// }
// else {
// 	console.log('Input does not match');
// }

// const result = text('Your Notes...');
// //const val = text('Your pages...');
// console.log(text_color.bold.bgBlue.red('Success!'));

// console.log(result);

// console.log(process.argv[2]);

//console.log(validator.isEmail('abc@xyz.com'));

//const file = require('fs');

// const add = require('./utils.js');

// const sum = add(4,2);

// console.log(sum);

//file.writeFileSync('notes.txt','I am Chinmay!');

//file.appendFileSync('notes.txt',' I am 18 years old.');
