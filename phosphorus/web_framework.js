// -- SCROLL CHECK --
window.onscroll = function() { 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('nav').classList.add('on-scroll');
    } else {
        document.getElementById('nav').classList.remove('on-scroll');
    }
}


// DETECT IF ON IPHONE X OR ABOVE -----
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}