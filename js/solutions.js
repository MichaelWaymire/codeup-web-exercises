"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */


// Define the function by stating it with "function"
function isBoolean(input){
    typeof input === "boolean"; // this defines the input for the Boolean to be true / false

/**
    isBoolean(true)             // true
    isBoolean(false)            // true
    isBoolean(0)                // false
    isBoolean(null)             // false
    isBoolean("")               // false
    isBoolean("Bob")            // false
    isBoolean([1, 2])           // false
**/


}
// Call the function!


//

function isNumeric(input) {
    if(!isNaN(parseFloat(input))) {
        return true;
    } else {
        return false;
    }
}




function isString(a){
    return typeof a === "string"

}



function isArray(input){
    return Array.isArray(input);
}





function isNegative(a) {
 return a <0
}





function isPositive(a) {
    return a > 0;

}





function increment(input) {
       if(isNumeric(input)) {
           return parseFloat(input) + 1;
       } else {
           return false;
       }

}


function decrement(input) {
    if(isNumeric(input)) {
        return parseFloat(input) - 1;
    } else {
        return false;
    }
}




function square(input){
    if(isNumeric(input)) {
        return input * input;
    } else {
        return false;
    }
}



function upperCase(input) {
    if(isString(input) && !isNumeric(input)) {
        return input.toUpperCase();
    } else {
        return false
    }
}




function isPalindrome(input) {
    if(!isString(input)) {
        return false;
    } else {
        input = uppercase(input)
        return input.split("").reverse().join("");
    }
}



function getHighestNumber(a,b, c) {
    if (isNumeric(a) && isNumeric(b) && isNumeric(c)) {
        if (a > b && b > c) {
            return a;
        } else if (b > a && b > c) {
            return b;
        } else if (c > a && c > b) {
            return c;
            //return Math.max(a, b, c); can also do the same.
        } else {
            return false;
        }

    }
}



function containsVowel(input) {
        if(isString(input)) &&
            input.includes("a") ||
            input.includes("e") ||
            input.includes("i") ||
            input.includes("o") ||
            input.includes("u") {
            return true;
        } else {
            return false;
    }
}







function add(addition1, addition2){
    return addition1 + addition2;

}






function multiply(a, b) {
    return a * b;
}



function sumOfSquares(arry) {
    return arry === 0
}



