// 'use strict';
// var count =2;
//
// while (count <= 65536) {
//     console.log(count);
//     count *= 2;
// }



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


if(confirm("Ice Cream Man jingle plays")) {
    var allCones = Math.floor(Math.random() * 50) + 50;


    do {
        var conesSold = Math.floor(Math.random() * 5) + 1;
        if (allCones > conesSold) {
            (allCones -= conesSold);
            console.log("I just sold " + conesSold + ", I have " + allCones + " left.")
        } else if (allCones < conesSold) {
            console.log("I only have " + allCones + ". I can not sell you " + conesSold)
        }
    } while (allCones !== conesSold);
    console.log(allCones + " I sold " + conesSold);
    console.log("Sold Out");
}








    //     do {
//         var conesSold = Math.floor(Math.random() * 5) +1;
//         customerBought = console.log(conesSold + " cones sold, I have " + allCones + " left.");
//         if(allCones > conesSold) {
//             allCones--;
//
//         } else if (conesSold < allCones){
//             console.log("Cannot sell you " + conesSold + ". I only have " + allCones + " left.")
//         }
//
//     } while (allCones !== conesSold)
//     console.log("Yay, I sold them all!")
//
// }




