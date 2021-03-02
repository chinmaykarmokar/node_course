const fs = require('fs');



// References:

// const book = {
// 	title: 'Learn JS',
// 	author: 'Chinmay'
// }

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);

// console.log(parsedData.author);

// const databuffer = fs.readFileSync('1-json.json');
// const dataJSON = databuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

// fs.writeFileSync('1-json.json',bookJSON);

const databuffer = fs.readFileSync('1-json.json');
const dataJSON = databuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'CMK2002';
user.age = 19;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json',userJSON);