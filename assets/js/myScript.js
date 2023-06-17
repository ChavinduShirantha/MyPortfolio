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

// Show the initial slide
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