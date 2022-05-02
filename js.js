window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
        document.querySelector('#header').style.backgroundColor = 'rgba(0,0,0,0.5)';
        document.querySelector('#header').style.backdropFilter = 'blur(10px)';
    } else {
        document.querySelector('#header').style.backgroundColor = 'transparent';
        document.querySelector('#header').style.backdropFilter = 'none';
    }
});

