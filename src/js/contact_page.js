//contact_page
let listContact = document.querySelector('.contact-list .title-tabs .btn-list')
let mapContact = document.querySelector('.contact-list .title-tabs .btn-map')
let listBlock = document.querySelector('.contact-list .contact-list-blocks')
let mapBlock = document.querySelector('.contact-list .contact-list-map')

listContact.onclick = function(e){
  e.preventDefault();
  listBlock.style.display = 'block'
  mapBlock.style.display = 'none'
  listContact.classList.add('active')
  mapContact.classList.remove('active')
}
mapContact.onclick = function(e){
  e.preventDefault();
  listBlock.style.display = 'none'
  mapBlock.style.display = 'block'
  listContact.classList.remove('active')
  mapContact.classList.add('active')
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
  document.body.style.overflow = ''
	mobile_block.style.display = 'none'
}

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
