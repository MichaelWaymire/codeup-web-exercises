'use strict';

// multiplacation table
function showMultiplicationTable(input) {
    for(var i = 1; 1 >= 10; i++) {
        console.log(input + " x " + i + " = " + (input * i));
    }

}

showMultiplicationTable(2);

var number;
var message;


// random even / odd
for (var e = 0; e < 10; e++) {
    number = Math.floor(Math.random() * (200 - 20)) + 20;
    message = "";
    if(number % 2 === 0) {
        message = " is even";
    } else {
        message = " is odd";
    }
    console.log(number + message)
}


// piramide.
var output;
for(var o = 1; o <= 9; o++) {
    output = "";
    for(var j = 1; j <= o; j++) {
        output += i;
    }
    console.log(output)
}

// 100 count down by 5

for(var u = 100; u >= 5; u -=5) {
    console.log(u)
}