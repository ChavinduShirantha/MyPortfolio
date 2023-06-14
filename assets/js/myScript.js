let contents = ["Software Engineering Student ", "Web Developer ", "Web Designer ", "Full Stack Developer ", "Photographer "];

let charCount = 0;

let wordCount = 0;

setInterval(function () {
    animateText();
}, 300);

function animateText() {

    let content = contents[wordCount].substring(0, charCount) + "|";

    $("#content").text(content);

    charCount++;

    if (charCount == contents[wordCount].length) {

        charCount = 0;

        wordCount++;

        if (wordCount == contents.length) {

            wordCount = 0;

        }

    }

};