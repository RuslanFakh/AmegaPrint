///////////////////////slider
const slides = document.querySelectorAll('.slider-block-slider .item')
const btn_prev = document.querySelector('.btn-slider .prev')
const btn_next = document.querySelector('.btn-slider .next')

let step = 0

btn_next.onclick = function(e){
  e.preventDefault();

  // for(let i=0; i < slides.length; i++){
    slides[step].classList.remove('opacity')
    step++
    if(step == slides.length){
      step = 0
    }
    slides[step].classList.add('opacity')
  // }
}

btn_prev.onclick = function(e){
  e.preventDefault()
  slides[step].classList.remove('opacity')
  step--
  if(step < 0){
    step = slides.length - 1
  }

  slides[step].classList.add('opacity')
}

///////////////////////mobile menu
const btn_menu = document.querySelector('.btn-menu')
const btn_close = document.querySelector('.close')
const mobile_block = document.querySelector('.bg-mobile-menu')

btn_menu.onclick = function(e){
	e.preventDefault()
	document.body.style.overflow = 'hidden'
	mobile_block.style.display = 'block'
}
btn_close.onclick = function(e){
	e.preventDefault()
	mobile_block.style.display = 'none'
}

///////////////////////select
document.querySelectorAll('.select').forEach(select => { //Выбриаем все выпадающие списки на странице

	let selectCurrent = select.querySelector('.select__current'),
			selectList = select.querySelector('.select__list'),
			selectInput = select.querySelector('.select__input'),
			selectItem = select.querySelectorAll('.select__item');

	//по клику добавляем/удалям класс
	selectCurrent.addEventListener('click', () => {
		selectList.classList.toggle('select__list--show')
	})

	//обходим элементы списка
	selectItem.forEach(item =>{

		//обрабатываем событие клик по элементу
		item.addEventListener('click', ()=>{

			//получаем значение из data-атрибута
			let itemValue = item.getAttribute('data-value')

			//получаем содержание элемента (текст)
			let itemText = item.textContent

			//присваиваем инпуту ранее полученное значение из data-атрибута
			selectInput.value = itemValue

			//присваиваем текущее значение (текст)
			selectCurrent.textContent = itemText

			//скрываем выпадающий список
			selectListHide()
		})
	})

	// функция закрытия выпадающего списка
	let selectListHide = () => {
		selectList.classList.remove('select__list--show')
	}
	//Закрываем выпадающий сисок, если клик был вне области
	document.addEventListener('mouseup', (e) =>{
    if (!select.contains(e.target))	selectListHide()
  })

})
