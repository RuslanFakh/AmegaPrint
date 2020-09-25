///////////////////////slider
const slides = document.querySelectorAll('.slider-block-slider .item')
const slides_text = document.querySelectorAll('.slider-block-text')
const btn_prev = document.querySelector('.btn-slider .prev')
const btn_next = document.querySelector('.btn-slider .next')

let step = 0

btn_next.onclick = function(e){
  e.preventDefault();

  // for(let i=0; i < slides.length; i++){
		slides[step].classList.remove('opacity')
		slides_text[step].classList.remove('opacity')

    step++
    if(step == slides.length){
      step = 0
    }
    slides[step].classList.add('opacity')
    slides_text[step].classList.add('opacity')
  // }
}

btn_prev.onclick = function(e){
  e.preventDefault()
  slides[step].classList.remove('opacity')
  slides_text[step].classList.remove('opacity')
  step--
  if(step < 0){
    step = slides.length - 1
  }

  slides[step].classList.add('opacity')
  slides_text[step].classList.add('opacity')
}
