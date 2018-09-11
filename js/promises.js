

let wait = ms => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("we're done")
		}, ms)
	})
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// const isSmallThenTen = (num) => {
// 	return new Promise((resolve, reject) => {
// 		if(num < 10) {
// 			resolve("Its less then 10");
// 			console.log(resolve)
// 		} else {
// 			reject("Its more then 10");
// 			console.log(reject)
// 		}
// 	})
// };
//
// console.log(isSmallThenTen(1));
//
//
function getLastCommit (){
	return fetch('https://api.github.com/users/michaelwaymire/events',{headers:{'Authorization':'Token Code'}})
		.then(response => response.json())
		.then((users) => (users[0].created_at))
		.catch(error => console.log(error))
}
getLastCommit().then(data => data).then(Date => console.log(Date));





