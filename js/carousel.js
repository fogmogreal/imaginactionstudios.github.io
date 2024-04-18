$(document).ready(function() {
    const track = $('.carousel-track');
    const images = $('.carousel-track img');
    const imageWidth = images.width() + parseInt(images.css('margin-left'));
    let currentIndex = 0;

    function moveRight() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        const translateValue = -currentIndex * imageWidth;
        track.css('transform', 'translateX(' + translateValue + 'px)');
    }

    function startCarousel() {
        setInterval(function() {
            moveRight();
        }, 3000); 
    }

    startCarousel();
}); 