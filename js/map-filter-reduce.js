const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];






let moreThenTwo = users.filter(val => {return val.languages.length > 2});
console.log(moreThenTwo);

let emailAddressStr = users.map(emails => emails.email);

// emailAddressStr = emailAddressStr.toString();
console.log(emailAddressStr);

// let emailAddress = users.map(user => user.email);
// 	console.log(`Here are the emails address for the list of users: ${emailAddress}`);

const totalExp = users.reduce(((total, user) => total += user.yearsOfExperience), 0);
console.log(totalExp);

const avgExp = totalExp/users.length;
console.log(avgExp);


const longestEmail = users.reduce((longest, user) => {
	if(user.email.length > longest.length) {
		longest = user.email;
	}
	return longest;
}, "");
console.log(longestEmail);


