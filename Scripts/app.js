/* main JavaScript file */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";   // executionable command
    // don't let me assign variables like a string to an integer

    // code goes in here

    console.log("App Started...");

    // create a reference to a p element with an id of "firstParagraph"
    var firstParagraph = document.getElementById("firstParagraph");

    firstParagraph.textContent = "It's alive!!!";

})();