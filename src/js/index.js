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


/////////////////// ask question
//inputs
const name_question = document.getElementById('name-question')
const phone_question = document.getElementById('phone-question')
//messages
const p_q_name = document.getElementById('p-q-name')
const p_q_phone = document.getElementById('p-q-phone')

const btn_question = document.getElementById('btn-question')
$("#phone-question").mask("8(999) 999-9999");
btn_question.addEventListener('click', function(e){
  displayBlock(name_question, p_q_name, e)
  displayBlock(name_question, p_q_phone, e)
})
name_question.oninput = function(){
  p_q_name.style.display = 'none'
}
phone_question.oninput = function(){
  p_q_phone.style.display = 'none'
}
