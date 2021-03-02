const fs = require('fs');

const getNotes = function (text) {
	return text;
}

const addNotes = function (title,body) {
 	const notes = loadNotes();
 	console.log(notes);

 	notes.push({
 		title: title,
 		body: body
 	})

 	savenotes(notes);
}

const savenotes = function (notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = function () {
	try {
		const databuffer = fs.readFileSync('notes.json');
		const dataJSON = databuffer.toString();
		return JSON.parse(dataJSON);
	} catch(e) {
		return [];
	}
}

const removeNote = function (title) {
	const notes = loadNotes();
	const notesToKeep = notes.filter(function (note){
		return note.title !== title;
	})
	savenotes(notesToKeep);
}

module.exports = {
	getNotes: getNotes,
	addNotes: addNotes,
	removeNote: removeNote
}