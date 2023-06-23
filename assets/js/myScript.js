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

const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let currentSlide = 0;
let intervalId;

slides[currentSlide].classList.add('active');

function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    currentSlide = slideIndex;
    slides[currentSlide].classList.add('active');

    const transformValue = -slideWidth * currentSlide;
    slidesContainer.style.transform = `translateX(${transformValue}px)`;
}

function previousSlide() {
    const newIndex = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
}

function nextSlide() {
    const newIndex = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    goToSlide(newIndex);
}

function startSlideshow() {
    intervalId = setInterval(nextSlide, 5000);
}

function stopSlideshow() {
    clearInterval(intervalId);
}

document.getElementById('prevBtn').addEventListener('click', () => {
    stopSlideshow();
    previousSlide();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    stopSlideshow();
    nextSlide();
});

startSlideshow();

document.getElementById('slideshow').addEventListener('mouseover', stopSlideshow);

document.getElementById('slideshow').addEventListener('mouseout', startSlideshow);



const slidesContainer1 = document.querySelector('.slides-container1');
const slides1 = document.querySelectorAll('.slide1');
const slideWidth1 = slides1[0].offsetWidth;
let currentSlide1 = 0;
let intervalId1;

slides1[currentSlide1].classList.add('active');

function goToSlide1(slideIndex) {
    slides1[currentSlide1].classList.remove('active');
    currentSlide1 = slideIndex;
    slides1[currentSlide1].classList.add('active');

    const transformValue = -slideWidth1 * currentSlide1;
    slidesContainer1.style.transform = `translateX(${transformValue}px)`;
}

function previousSlide1() {
    const newIndex = (currentSlide1 === 0) ? slides1.length - 1 : currentSlide1 - 1;
    goToSlide1(newIndex);
}

function nextSlide1() {
    const newIndex = (currentSlide1 === slides1.length - 1) ? 0 : currentSlide1 + 1;
    goToSlide1(newIndex);
}

function startSlideshow1() {
    intervalId1 = setInterval(nextSlide1, 5000);
}

function stopSlideshow1() {
    clearInterval(intervalId1);
}

startSlideshow1();

document.getElementById('slideshow1').addEventListener('mouseover', stopSlideshow1);

document.getElementById('slideshow1').addEventListener('mouseout', startSlideshow1);


let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    console.log("This message will print just after fully loading the website")

    loader.style.display = 'none';
});

$(document).ready(function() {
    $('#hamburger').click(function() {
        $('#navPanel').slideToggle();
    });
});
