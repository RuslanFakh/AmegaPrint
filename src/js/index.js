
///////////////////////slider
const slides = document.querySelectorAll('.slider-block-slider .item')
const slides_text = document.querySelectorAll('.slider-block-text')
const btn_prev = document.querySelector('.btn-slider .prev')
const btn_next = document.querySelector('.btn-slider .next')

let step = 0

btn_next.onclick = function(e){
  e.preventDefault();
		slides[step].classList.remove('opacity')
		slides_text[step].classList.remove('opacity')
    step++
    if(step == slides.length){
      step = 0
    }
    slides[step].classList.add('opacity')
    slides_text[step].classList.add('opacity')
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

// const slides = document.querySelectorAll('.slider-pics a')
// const btn_prev = document.querySelector('.slider-pics .prev')
// const btn_next = document.querySelector('.slider-pics .next')

// let step = 0

// btn_next.onclick = function(e){
//   e.preventDefault();
// 		slides[step].classList.remove('opacity')
//     step++
//     if(step == slides.length){
//       step = 0
//     }
//     slides[step].classList.add('opacity')
// }
// btn_prev.onclick = function(e){
//   e.preventDefault()
//   slides[step].classList.remove('opacity')
//   step--
//   if(step < 0){
//     step = slides.length - 1
//   }

//   slides[step].classList.add('opacity')
// }


/////////////////// ask question
//main block
  const ask_question = document.querySelector('.ask-question')
  const question_btn = document.getElementById('question-btn')
  const close_ask_question = document.getElementById('close-ask-question')
//open & close block
  question_btn.onclick = function(e){
    e.preventDefault()
    ask_question.style.display = 'block'
  }
  close_ask_question.onclick = function(e){
    e.preventDefault()
    ask_question.style.display = 'none'
  }
  document.addEventListener('keydown', function(e) {
    if (e.code === 'Escape') {
      ask_question.style.display = 'none'
    }
  });
//inputs
const name_question = document.getElementById('name-question')
const phone_question = document.getElementById('phone-question')
//messages
const p_q_name = document.getElementById('p-q-name')
const p_q_phone = document.getElementById('p-q-phone')
//send btn
const btn_question = document.getElementById('btn-question')
//validate form
$("#phone-question").mask("8(999) 999-9999");
btn_question.addEventListener('click', function(e){
  displayBlock(name_question, p_q_name, e)
  displayBlock(name_question, p_q_phone, e)
})
name_question.oninput = function(){
  p_q_name.style.display = 'none'
}
phone_question.onchange = function(){
  p_q_phone.style.display = 'none'
}
