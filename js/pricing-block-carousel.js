(function () {
    const slides = [
        `<div class="container-for-plan-basic"></div>`,
        `<div class="container-for-plan-medium"></div>`,
        `<div class="container-for-plan-pro"></div>`,
    ];
    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.pricing-block-carousel .slides');
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextslide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }
    function prevslide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
    }

    document.querySelector('.pricing-block-carousel .btn btn-warning').addEventListener('click', nextslide);
    document.querySelector('.pricing-block-carousel .btn btn-warning').addEventListener('click', prevslide);

    window.addEventListener('resize', showCurrentSlide);
    showCurrentSlide(nextSlide, 5000);
    showCurrentSlide();
})()