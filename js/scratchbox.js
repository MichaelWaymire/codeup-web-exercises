var inputWeather = alert("Answer me!");

function weatherCall(inputWeather) {
    var input = prompt("What is the weather like today?")
    if(input === "Sunny"){
        return alert("Wear some sunscreen today");
    } else if (input === "Raining") {
        return alert("bring an umbrella");
    } else {
        alert("Check the forecast for today!")
    }
}
console.log(weatherCall());





// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
// } else {
//     alert("Operation Canceled!");
// }

