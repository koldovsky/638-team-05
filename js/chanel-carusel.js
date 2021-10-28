(function () {
    const slides = [
        '<div class="headlines-center"><img src="img/netflix.svg" alt="netflix icon" class="icon-channels"><h3>Netflix</h3> <p>The most famous streaming service in the United States offering a wide variety of movies and TV series.</p></div>',
        '<div ><img src="img/hbo.webp" alt = "hbo icon" class="icon-channels"></div>',
        '<div ><img src="img/discovery.webp" alt="discovery icon" class="icon-channels"></div>',
        '<div ><img src="img/usa-network.webp" alt="usa-network icon" class="icon-channels"></div>',
        '<div ><img src="img/nickelodeon.webp" alt="nickelodeon icon" class="icon-channels"></div>', 
    ];
    let currentSlide = 0

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.chanel-carousel-foot .chanel-slide');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextslide(){
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }

    function prevslide(){
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();    
    }

    document.querySelector('.chanel-carousel-foot .next-klik').addEventListener('click',nextslide)
    document.querySelector('.chanel-carousel-foot .back-klik').addEventListener('click',prevslide)

    window.addEventListener('resize', showCurrentSlide);

    showCurrentSlide();
})();