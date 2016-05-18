/* main JavaScript file */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";   // executionable command
    // don't let me assign variables like a string to an integer

    // code goes in here

    console.log("App Started...");

    /*
    // declare named function
    function writeToFirstParagraph() {
        // for debugging only
        console.log("Exexcuting writeToFirstParagraph");

        // create a reference to a p element with an id of "firstParagraph"
        var firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.textContent = "It's alive!!!";
        
        console.log(tom);
    }
    */

    // declare a variable that points to anonymous function
    var writeToFirstParagraph = function () {
        // for debugging only
        console.log("Exexcuting writeToFirstParagraph");

        // create a reference to a p element with an id of "firstParagraph"
        var firstPTag = document.getElementById("firstParagraph");

        firstPTag.textContent = "It's alive!!!";
    }

    // execute function
    writeToFirstParagraph();
    
    console.log(firstPTag);

})();