/* main JavaScript file */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";   // executionable command
    // don't let me assign variables like a string to an integer

    var firstPTag = document.getElementById("firstParagraph");

    // event listener click
    firstPTag.addEventListener("click", firstParagraphClicked);
    
    // event listener hover
    firstPTag.addEventListener("mouseover",firstParagraphHover);

    var firstParagraphIsClicked = false;
    var firstParagraphWasHovered = false;

    // code goes in here
    console.log("App Started...");

    var myFirstParagraph = "This is my first paragraph. I am writing this for demonstration purposes. " +
        "This is the third sentence of my first paragraph."

    // declare named function
    function writeToFirstParagraph() {
        // for debugging only
        console.log("Exexcuting writeToFirstParagraph");

        // create a reference to a p element with an id of "firstParagraph"

        firstPTag.textContent = myFirstParagraph;
    }

    // event handler for firstParagraph clicked
    function firstParagraphClicked() {
        if (firstParagraphIsClicked) {
            firstPTag.style.color = "#000000";
            firstParagraphIsClicked = false;
        }
        else {
            firstPTag.style.color = "#ff0000";
            firstParagraphIsClicked = true;
        }
    }

    // event handler for firstParagraph hover
    function firstParagraphHover() {
        if (firstParagraphWasHovered) {
            firstPTag.style.color = "#000000";
            firstParagraphWasHovered = false;
        }
        else {
            firstPTag.style.color = "#00ff00";
            firstParagraphWasHovered = true;
        }
    }

    /*
        // declare a variable that points to anonymous function
        var writeToFirstParagraph = function () {
            // for debugging only
            console.log("Exexcuting writeToFirstParagraph");
    
            // create a reference to a p element with an id of "firstParagraph"
            var firstPTag = document.getElementById("firstParagraph");
    
            firstPTag.textContent = "It's alive!!!";
        }
    */
    // execute function
    writeToFirstParagraph();

    //console.log(firstPTag);

})();