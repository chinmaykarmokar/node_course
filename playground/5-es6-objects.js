// Object Property Shorthand

const name = 'Chinmay';
const userAge = 18;

const user = {
	name,
	age: userAge
}

console.log(user);

// Object Destructuring

const product = {
	label: 'GVK M4',
	price: '$10',
	stock: '500'
}

const {label: productLabel, stock, rating = 4.12986745} = product;

console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, {label, stock}) => {
	console.log(type, label, stock);
}

transaction('order',product);