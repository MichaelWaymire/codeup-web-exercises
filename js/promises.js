


const wait = new Promise((resolve, reject) => {
	if (Math.random() > 0.5) {
		resolve('You\'ll see this after 1 second');
	} else {
		reject('You\'ll see this after 3 seconds');
	}
});



// const wait = (num) => {
// 	return new Promise((resolve, reject) => {
// 		if(num < 10) {
// 			resolve(true)
// 		} else {
// 			reject(false)
// 		}
// 	})
// }'



// fetch(url, {headers: {'Authorization': 'token input token here'}})


