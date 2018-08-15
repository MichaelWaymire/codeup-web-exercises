(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
   planetsArray = planetsString.split('|');

   console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planetsBlank = [];
    // for (var i = 0; i < planetsArray.length; i++) {
    //     planetsBlank.push('<br>');
    //     planetsBlank.push(planetsArray[i]);
    //     planetsBlank.push('<br>');
    // }
    // console.log(planetsBlank)


    (function(){
        var ul = document.createElement('ul');
        ul.setAttribute('class','solarSystem');

        var t;


        document.getElementById('Plantes').appendChild(ul);
        planetsArray.forEach(renderPlanetList);

        function renderPlanetList(element) {
            var li = document.createElement('li');
            li.setAttribute('class','item');

            ul.appendChild(li);

            t = document.createTextNode(element);

            li.innerHTML=li.innerHTML + element;
        }
    })();











//     var planetsBlank = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
//
//
//
//
//     for (var i = 0; i < planetsBlank.length; i++) {
//         var arrValue = planetsBlank[i].innerHTML;
//         console.log(arrValue);
//         planetsArray.push(arrValue);
//     }
// console.log(planetsBlank);




})();
