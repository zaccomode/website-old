var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var thumbs = document.getElementsByClassName("thumbnail");
    var caption = document.getElementById("caption");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    thumbs[slideIndex - 1].className += " active";
    caption.innerHTML = thumbs[slideIndex - 1].alt;
}