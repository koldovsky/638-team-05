const clockContainer = document.querySelector('.clock')

setInterval ( () => clockContainer.innerText = new Date().toLocaleTimeString(), 1000);

(function(){
const slides = [
    `<div class = pricing-block-container-1></div>`,
    `<div class = pricing-block-container-2></div>`,
    `<div class = pricing-block-container-3></div>`
];
let currentSlide = 0;
function showCurrentslide (){
    const slideContainer = document.querySelector('.pricing-block-container-1 .pricing-block-container-2 .pricing-block-container-3');
    slideContainer.innerHTML = slides [currentSlide];
}
function nextSlide (){
    currentSlide++
    if (currentSlide >= slides.length) currentSlide=0;
    showCurrentslide();
}
    setInterval (nextSlide, 1000);

    showCurrentslide();

})();