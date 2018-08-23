// ///////////////
//             //
//             //
//   NOTES     //
//    FOR      //
//             //
//  IF/ELSE    //
//     &       //
//  While/DO   //
//             //
// ///////////////
//
//
// if else loop
// // if else
// var inputWeather = alert("Answer me!");
//
// function weatherCall(inputWeather) {
//     var input = prompt("What is the weather like today?")
//     if(input === "Sunny"){
//         return alert("Wear some sunscreen today");
//     } else if (input === "Raining") {
//         return alert("bring an umbrella");
//     } else {
//         alert("Check the forecast for today!")
//     }
// }
// console.log(weatherCall());
//
//
//
//
// //If else
// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
// } else {
//     alert("Operation Canceled!");
// }
//
// var hitME = function () {
//     return Math.floor((Math.random() *11)+1)
// }
// var count = 1;
// confirm("Do you want to play a game?");
//
// //While Loop
// while (count <=21) {
//     if (confirm("Your score is " + count + ". Do you want to hit?")) {
//         count += hitME();
//     }  else {
//             break;
//     }
//     if (count > 21) {
//         alert("You Busted!")
//     } else {
//         alert("Your score is " + count);
//     }
// }
//
// While / Do loop
// if (confirm("Do you want to play a game?")) {
//     var magicNumber = Math.floor((Math.random() * 20) + 1);
//     var ourGuess;
//
//     do {
//         ourGuess = parseInt(prompt("Pick a number between 1 and 20"));
//         if (typeof ourGuess != "number") continue;
//         if (ourGuess < magicNumber) {
//             alert("Your guess is too low");
//         } else if (ourGuess > magicNumber) {
//             alert("Your guess is too high");
//         }
//     } while (ourGuess !== magicNumber);
//     alert("Congrats you got it!");
// }
//
// var count = 0;
// while (count < 10){
//     console.log(count);
//     count++;
// }
//
// set up is the same to the example above
//
// for (var count = 0; count < 10; count++) {
//     console.log(count);
// }
//
// Break down for above code
// for (initialization; condition; increment)/**Dont put a ; here**/ {
//      code goes here!
// }
//
//
//
// function flipCoin(input) {
//
//
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// fiz buzz
//
// for (var i = 1; i <= 100; i++) {
//     var expletive = '';
//     if (i % 3 === 0) expletive += 'Fizz';
//     if (i % 5 === 0) expletive += 'Buzz';
//     console.log(expletive || i);
// }
//
//
// var bugs = ['wasp', 'ants', 'dragonfly', 'mosquito', 'bees', 'flys', 'gnats', 'ladybug'];
// bugs.push('antlion');
//
// /**Define a function named allIndexesOf that takes in two arguments.
//      * The first argument should be the array to search and the second argument
//  * should be the value you want to search for. If the item does not exist
//  * in the provided array, return an empty array;
//
// Given:
//     var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]
//
//
// Challenge #2
// Define a function named removeAll(array, value) that takes in two arguments.
//  The first argument should be an array and the second argument should be a value you wish to
//
// Given:
//     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito",
//  "typo", "reference error", "type error"];
//
// removeAll(bugs, "ant") should return ["mosquito", "scorpion",
//  "mosquito", "typo", "reference error", "type error"]
//
// removeAll(bugs, "mosquito") should return ["ant", "scorpion",
//  "ant", "ant", "typo", "reference error", "type error"]
//
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.
//  **/
//
//
//
//
// function findLongestWord(input) {
//     var inputSplit = input.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < inputSplit.length; i++){
//         if(inputSplit[i].length > longestWord){
//             longestWord = inputSplit[i].length;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("I like going out to parties with friends or watching TV"));
//
//
//
//
// function pullTheWord(input) {
//     var maxWord = 0;
//     var word = '-1';
//     var wordCounter = input.split(' ');
//     for (var i = 0; i < wordCounter.length; i++) {
//         for (var a = 0; a <wordCounter[i]; a++);{
//             var countAgain = 0;
//             for (var b = a + 1; b < wordCounter[i].length; b++){
//                 if (wordCounter[i] [a] === wordCounter [i] [b])
//                     var countNew += 1;
//             }
//             if (countNew > count) {
//                 count = countNew;
//                 word = wordCounter[i];
//             }
//         }
//
//     }
//     return word;
// }
// console.log(pullTheWord("Marry, Mississippi"));
//
// function wordCounter(input) {
//
// }
//
//
// /**Make a function named isOdd(number)
// Make a function named isEven(number)
// Make a function named identity(input) that returns the input exactly as provided.
//     Make a function named isFive(input)
// Make a function named addFive(input) that adds five to some input.
//     Make a function named isMultipleOfFive(input)
// Make a function named isThree(input)
// Make a function named isMultipleOfThree(input)
// Make a function named isMultipleOfThreeAndFive(input)
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// Make a function named isTrue(boolean)
// Make a function named isFalse(boolean)
// Make a function named isTruthy(input) // remember that values other than true will behave like true
// Make a function named isFalsy(input) // remember that values other than false behave like false
// Make a function named isVowel(letter)
// Make a function named isConsonant(letter)
// Make a function named isCapital(letter)
// Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named isZero(number)
// Make a function named notZero(input) that returns true if..
// Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
//
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// Write a function named cube(n) that returns n * n * n
// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named trim(string) that removes empty spaces before and after the input.
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
//     Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
//  */
// function isItOdd(input) {
//     var input = 0;
//     while (input <= 101) {
//         if (input % 1 === 0) {
//             document.write(input + " is even number <br>");
//             input = input + 1;
//
//         } else if (input % 2 === 0); {
//             document.write(input + " is odd number <br>");
//             input = input + 1;
//         }
//     }
// }
// console.log(isItOdd());
//
// function identiy(input) {
//     input = input;
//     return input;
// }
// console.log(identiy(5));
//
// function addFive(input) {
//     input = input + 5;
//     return input;
// }
// console.log(addFive(5));
//
//
// /** loop
//
//  **/
//
// var a = parseInt(prompt("Give me a number"));
// var b = parseInt(prompt("Give me a second number"));
//
// function isItMath(a, b) {
//       var product = a;
//       for (var i = 1; i<b; i++) {
//           document.write(product += a);
//
//       }
//     return product;
// }
//
//
//
//
// function factThis(input) {
//     for (var i = input - 1; i >= 1; i--) {
//         input = input * i;
//     }
//     return input;
// }
// console.log(factThis(10));
//
// function summantionThis(num) {
//     var product = 0;
//     for (var i = num; i > 0; i--){
//         product += i;
//     }
//     return product;
//
// }
//
// console.log(summantionThis(5));
//
//
//
//
// function capializeFirstLetter (input) {
// 	return input(0).toUpperCase() + input.slice(1);
// }
// console.log(capializeFirstLetter());

function capitalizeFirstLetter(input) {

	for (var i = i = 0; i < 1; i++) {
		console.log(input && input[i].toUpperCase() + input.slice(1).toLowerCase());
	}

	// return input[0].toUpperCase() +  + input.slice(1);
}


console.log(capitalizeFirstLetter("doG"));


/**Make a function named isOdd(number)
Make a function named isEven(number)
Make a function named identity(input) that returns the input exactly as provided.
    Make a function named isFive(input)
Make a function named addFive(input) that adds five to some input.
    Make a function named isMultipleOfFive(input)
Make a function named isThree(input)
Make a function named isMultipleOfThree(input)

Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
Make a function named isTrue(boolean)
Make a function named isFalse(boolean)
Make a function named isTruthy(input) // remember that values other than true will behave like true
Make a function named isFalsy(input) // remember that values other than false behave like false
Make a function named isVowel(letter)
Make a function named isConsonant(letter)
Make a function named isCapital(letter)
Make a function named isLowerCase(letter)
Make a function named hasLowerCase(string) that returns if a string has any lower cased
Make a function named isSpace(letter) that returns if a character is a space character
Make a function named isZero(number)
Make a function named notZero(input) that returns true if..
Write a function named lowerCase(string)
Write a function named double(n) that returns a number times two
Write a function named triple(n) that returns a number times 3
Write a function named quadruple(n) that returns a number times 4
Write a function named half(n) that returns 1/2 of the provided input

Write a function named subtract(a, b) that returns a minus b
Write a function named multiply(a, b) that returns the product of a times b
Write a function named divide(a, b) that returns a divided by b
Write a function named remainder(a, b) that returns the remainder after dividing a by b
Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
Write a function named cube(n) that returns n * n * n
Write a function named squareRoot(n) that returns the square root of the input
Write a function named cubeRoot(n) that returns the cube root of the input
Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
Write a function named degreesToRadians(number)
Write a function named radiansToDegrees(number)
Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    Make a function named trim(string) that removes empty spaces before and after the input.
    Make a function named areEqual(input1, input2) that returns if both inputs have the same value
Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
    Make a function named not(input) returns the input with a flipped boolean
Make a function named notNot(input) that the negation of the negation of the input.
    Make a function named and(predicate1, predicate2) that returns the logical operation of AND
Make a function named or(predicate1, predicate2) that returns the logical operation of OR
Write a function called reverseString(string) that reverses a string
Make a function named absoluteValue(number) that returns the absolute value of a number.
    Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
 */

// function isOddNumber(input) {
// 	if (input % 2 === 0){
// 		return input + " Its even";
// 	} else if (input % 1 === 0){
// 		return input + " Its Odd";
//
// 	}
// }
// console.log(isOddNumber(1));
// console.log(isOddNumber(2));
// console.log(isOddNumber(25));
//
// function noChangesAllowed(input) {
// 	return input === 0;
// }
// console.log(noChangesAllowed(0));
// console.log(noChangesAllowed(1));
//
// function isFive(input){
// 	var input = input === 5;
// 	return input
// }
// console.log(isFive(1));
// console.log(isFive(5))
//
//
// function addFive(input) {
// 	var totals = input + 5;
// 	return totals
// }
// console.log(addFive(10));
//
// function isMultipleOfFive(input) {
// 	var input = input % 5 === 0;
// 	return input
// }
// console.log(isMultipleOfFive(5));
// console.log(isMultipleOfFive(4));
//
// function isThree(input) {
// 	var input = input === 3;
// 	return input;
// }
// console.log(isThree(2));
//
//
// function isMultpileoThree(input) {
// 	var input = input % 3 === 0;
// 	return input;
//
// }
// console.log(isMultpileoThree(3));
// console.log(isMultpileoThree(4));
//
// function isMultipleoOfThreeAndFive(input) {
// 	var input = input % 3 === 0 || input % 5 === 0;
// 	return input
// }
// console.log(isMultipleoOfThreeAndFive(3));
// console.log(isMultipleoOfThreeAndFive(5));
// console.log(isMultipleoOfThreeAndFive(1));

function sortThem(a,b,c,d,e) {
	var largestNumber = [a,b,c,d,e];
	largestNumber = largestNumber.sort(
		function (a,b) {
			return b-a
		}
	);
	return largestNumber;
}
console.log(sortThem(1,5,8,3,-9));


function eighty(a,b) {
	if((a === 80 || b === 80) || (a+b === 80)){
		return true;
	} else {
		return false;
	}

}
console.log(eighty(80,5));


var pyAdder = function(str){
	str = str.toLowerCase();
	if(str.substr(0,2)) === "py";{
		return str;
	} else {
		str = "py" + str;
	}
}







