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


//if else loop
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

While / Do loop
if (confirm("Do you want to play a game?")) {
    var magicNumber = Math.floor((Math.random() * 20) + 1);
    var ourGuess;

    do {
        ourGuess = parseInt(prompt("Pick a number between 1 and 20"));
        if (typeof ourGuess != "number") continue;
        if (ourGuess < magicNumber) {
            alert("Your guess is too low");
        } else if (ourGuess > magicNumber) {
            alert("Your guess is too high");
        }
    } while (ourGuess !== magicNumber);
    alert("Congrats you got it!");
}

// var count = 0;
// while (count < 10){
//     console.log(count);
//     count++;
// }

// set up is the same to the example above

// for (var count = 0; count < 10; count++) {
//     console.log(count);
//}

// Break down for above code
// for (initialization; condition; increment)/**Dont put a ; here**/ {
//      code goes here!
// }












