"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//Functions!!


// var wantsToPutInANumber = confirm("Hello, would you kindly put in a number?")




If Else
if (wantsToPutInANumber) {
    var userNumber = prompt("Put the number in here!");
    if (isItEven(userNumber)){
        alert("The number you picked was " + userNumber + ", you picked an Even Number!")
    } else {
        alert("The number you picked was " + userNumber + ", I can see you went with an Odd number!")
    }
    if (userNumber > 0) {
        alert("Look at that! " + userNumber + " Is a positive number")
    } else {
        alert("Look at that! " + userNumber + " Is a negative number")
    }
    alert(add100(userNumber));
} else {
 alert("That is no good.")

}
//
// function isItEven(userNumber) {
//     return parseInt(userNumber) % 2 === 0;
// }
//
// function isItOdd(UserNumber) {
//     Math.abs(parseInt(userNumber) % 2) ==1;
//     return alert("The number you picked was " + userNumber + ", I can see you went with an Odd number!")
// }
//
// function add100(userNumber){
//     alert(parseInt(userNumber) + 100);
//
// }
// var itsOdd = isItOdd(userNumber)


// alert(add100(userNumber));
// alert(isItEven(userNumber));

//
// confirm("Hello, would you kindly put in a number?");
// var userNumber = prompt("Put the number in here!");
//
//
// if (userNumber) {
// var Even
// function userNumberEven(UserNumber) {
//     userNumber % 2 === 0;
//
// }
//
//
//     // var userNumber = prompt("Put the number in here!");
//     // return Math.abs(n % 2) == 1;
//     // var userNumberOdd = Math.abs(parseInt(userNumber) % 2) ==1;
//     // alert("The number you picked was " + userNumber + ", I can see you went with an Odd number!")
//     // alert(parseInt(userNumber) + 100);
//     // alert(-Math.abs(userNumber));
//     // alert()
//
//
//
//
//     // var userNumberEven = userNumber % 2 === 0;
//     var userNumberOdd = Math.abs(parseInt(userNumber) % 2) == 1;
//
//     alert("The number you picked was " + userNumber + ", I can see you choose an Even Number!")
//
// } else if (userNumber){
//
//     alert("The number you picked was " + userNumber + ", I can see you went with an Odd number!")
// }
// console.log()

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var whatColorDoYouLike = confirm("Did you know colors are amazing?");
//


var pickAColor = confirm("color")

function analyzeColor(pickAColor){

    var userColor = prompt("What is your favorite color?".toLowerCase());

    if(userColor == "blue") {

        alert(userColor + " is the color of the sky");
    } else if (userColor == "red"){
        alert(userColor + " is the color of strawberries");
    } else if (userColor == "green") {
        alert(userColor + " is the color of grass")
    }


    return userColor;

}



pickAColor



// alert("blue is the color of teh sky");
// alert("red is the color of strawberries");
// alert("yellow is the color of the sun");
// alert("green is the color of grass");
// alert("You're turning violet, Violet!");
// alert("Indigo-a-go-go?");
// alert("orange you glad its not banana?");





// function analyzeColor(userColor) {
//
//
//     "blue" === blue;
//
//     "red" === red;
//
//     "yellow" === yellow;
//
//     "green" === green;
//
//     "violet" === violet;
//
//     "indigo" === indigo;
//
//     "orange" === orange;
//
//     return userColor
// }

console.log(analyzeColor())









// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);