let contents = "Software Engineering Student ";

let count = 0;
setInterval(function () {
    animateText();
}, 200);

function animateText() {
    let content = contents.substring(0, count) + "|";
    $("#content").text(content);

    count++;

    if (count == contents.length) {
        count = 0;
    }

};