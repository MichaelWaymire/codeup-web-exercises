/////////////////
//             //
//             //
//   NOTES     //
//    FOR      //
//             //
//  IF/ELSE    //
//     &       //
//  While/DO   //
//             //
/////////////////


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
// function flipCoin(input) {
//
//
// }
















//fiz buzz

// for (var i = 1; i <= 100; i++) {
//     var expletive = '';
//     if (i % 3 === 0) expletive += 'Fizz';
//     if (i % 5 === 0) expletive += 'Buzz';
//     console.log(expletive || i);
// }


// var bugs = ['wasp', 'ants', 'dragonfly', 'mosquito', 'bees', 'flys', 'gnats', 'ladybug'];
// bugs.push('antlion');



/**Define a function named allIndexesOf that takes in two arguments.
     * The first argument should be the array to search and the second argument
 * should be the value you want to search for. If the item does not exist
 * in the provided array, return an empty array;

Given:
    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
allIndexesOf(fruits, "apple") should return the array [0, 3]
allIndexesOf(fruits, "guava") should return the array []
allIndexesOf(fruits, "pineapple") should return [4]


Challenge #2
Define a function named removeAll(array, value) that takes in two arguments.
 The first argument should be an array and the second argument should be a value you wish to

Given:
    var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito",
 "typo", "reference error", "type error"];

removeAll(bugs, "ant") should return ["mosquito", "scorpion",
 "mosquito", "typo", "reference error", "type error"]

removeAll(bugs, "mosquito") should return ["ant", "scorpion",
 "ant", "ant", "typo", "reference error", "type error"]

removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.
 **/



var fruits = ["apple", "banana", "orange", "apple", "pineapple"];


function allIndexesOf (,){

}