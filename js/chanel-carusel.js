(function () {
    const slides = [
        '<div class="headlines-center"><img src="img/netflix.svg" alt="netflix icon" class="icon-channels"><h3>Netflix</h3><p>The most famous streaming service in the United States offering a wide variety of movies and TV series.</p></div>',
        '<div class="headlines-center"><img src="img/hbo.webp" alt = "hbo icon" class="icon-channels"><h3>HBO</h3> <p>A network of channels with the highest grossing TV series in the world,news,top sports events,and more.</p></div>',
        '<div class="headlines-center"><img src="img/discovery.webp" alt="discovery icon" class="icon-channels"><h3>Discovery</h3><p>Educational channel provider.Here you can watch the most interesting facts about animals and history.</p></div>',
        '<div class="headlines-center"><img src="img/usa-network.webp" alt="usa-network icon" class="icon-channels"><h3>USA Network</h3><p>Only verified and timely news from all the American States and other countries.Be aware of whats going on!</p></div>',
        '<div class="headlines-center"><img src="img/nickelodeon.webp" alt="nickelodeon icon" class="icon-channels"><h3>Nickelodeon</h3><p>The most popular childrens channel worldwide. Enjoy cartoons, educational programs, and teenage shows.</p></div>', 
    ];
    let currentSlide = 0

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.chanel-carousel-foot .chanel-slide');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 400) {
            const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 600) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
                if (window.innerWidth > 800) {
                    const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                    slideContainer.innerHTML += slides[fourthSlideIdx];
                    if (window.innerWidth > 1000) {
                        const fifthSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
                        slideContainer.innerHTML += slides[fifthSlideIdx];
                    }
                }
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