


const isSmallThenTen = (num) => {
	return new Promise((resolve, reject) => {
		if(num < 10) {
			resolve("Its less then 10");
			console.log(resolve)
		} else {
			reject("Its more then 10");
			console.log(reject)
		}
	})
};

console.log(isSmallThenTen(1));


function getLastCommit (){
	return fetch('https://api.github.com/users/michaelwaymire/events',{headers:{'Authorization':'aa44610c8836c557f06c9f1a2376c4bca4a1d82'}})
		.then(response => response.json())
		.then((users) => (users[0].created_at))
		.catch(error => console.log(error))
}
getLastCommit().then(data => data).then(Date => console.log(Date));


