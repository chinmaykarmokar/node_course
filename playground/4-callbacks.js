setTimeout(() => {
	console.log('Two secons are up.')
}, 2000);

const names = ['Chinmay', 'Tanmoy', 'Seema'];
const shortNames = names.filter((name) => {
	return name.length <= 4;
})

const geocode = (address, callback) => {
	setTimeout(() => {
		const data = {
			latitude: 0,
			longitude: 0
		}

		callback(data);
	}, 2000)
}

geocode('Philadelphia', (data) => {
	console.log(data);
});

const add = (a,b,callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 2000)
}

add(2,3,(sum) => {
	console.log(sum);
})