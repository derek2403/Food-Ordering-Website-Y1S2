let slideIndex = 0;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("slidernav")[0].getElementsByTagName("a");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" actives", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " actives";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
}, 1500);

showSlides(slideIndex);