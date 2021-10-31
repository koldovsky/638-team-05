(function () {
    const slides = [
        '<div class="container-for-plan-basic"></div>',
        '<div class="container-for-plan-medium"></div>',
        '<div class="container-for-plan-pro"></div>'
    ];
    let currentSlide = 0

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.pricing-block-carousel .slides');
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }
    function prevslide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }

    document.querySelector('.pricing-block-carousel .btn btn-outline-light').addEventListener('click',nextslide);
    document.querySelector('.pricing-block-carousel .btn btn-outline-light').addEventListener('click',prevslide);

    setInterval(nextSlide, 1000);
    showCurrentSlide();
})();
