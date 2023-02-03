//   Adding Elements To dom 
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');


let activeSlides = 0;

rightBtn.addEventListener('click', () => {
    activeSlides++
    if(activeSlides > slides.length - 1){
      activeSlides = 0
    }

    setBgToBody()
    setActiveSlides()
})

leftBtn.addEventListener('click', () => {
    activeSlides--
    if(activeSlides > slides.length - 1){
      activeSlides = 0
    }

    setBgToBody()
    setActiveSlides()
})






// Setting Image To Body 
setBgToBody()

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlides].style.backgroundImage
}

function setActiveSlides(){
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlides].classList.add('active')
}
 