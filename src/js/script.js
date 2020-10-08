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

const year = document.getElementById('year')
let date = new Date()
year.innerHTML = date.getFullYear()


///////// chat

const chat = document.getElementById('chat')
chat.onclick = function(e){
	e.preventDefault()
	alert('Это чат!')
}


///////////////////// pay

const pay = document.getElementById('pay-btn')
const pay1 = document.querySelector('.pay-btn1')
const pay_block = document.querySelector('.pay-online')
const pay_close = document.querySelectorAll('.close-pay')
pay.onclick = function(e){
	e.preventDefault()
	pay_block.style.display = 'block'
	// alert(1)
}
pay1.onclick = function(e){
	e.preventDefault()
	pay_block.style.display = 'block'
	// alert(1)
}
pay_close[0].onclick = function(e){
	e.preventDefault(e)
	pay_block.style.display = 'none'
}

///////////////////// mail to director

const message_director = document.getElementById('dir_mes')
const message_director1 = document.getElementById('dir_mes1')
const close_mes = document.querySelector('#close-mes-dir')
const mail_director_block = document.querySelector('.mail-to-director')
const mobile_dm = document.getElementById('mobile-dm')

message_director.onclick = function(e){
	e.preventDefault()
	mail_director_block.style.display = 'block'
}
message_director1.onclick = function(e){
	e.preventDefault()
	mail_director_block.style.display = 'block'
}
mobile_dm.onclick = function(e){
	e.preventDefault()
	mail_director_block.style.display = 'block'
}
close_mes.onclick = function(e){
	e.preventDefault()
	mail_director_block.style.display = 'none'
}



//////////////////////////////////// order online

//file
const fileInput  = document.querySelectorAll( ".d-flex input.file" ),
    button     = document.querySelectorAll( ".d-flex .btn" ),
		the_return = document.querySelectorAll(".d-flex .file-name"),
		file_close = document.querySelectorAll('.d-flex .btn img')
for(let i = 0; i < button.length; i++){
	button[i].addEventListener( "click", function( event ) {
		event.preventDefault()
		the_return[i].value = ''
		the_return[i].classList.remove('accept-bg')
		file_close[i].classList.remove('rotate')
		fileInput[i].style.display = 'block'

	});
}
for(let i = 0; i < fileInput.length; i++){
	fileInput[i].addEventListener( "change", function( event ) {
		the_return[i].value = this.value;
		if(the_return[i].value != ''){
			file_close[i].classList.add('rotate')
			the_return[i].classList.add('accept-bg')
			this.style.display = 'none'
		}
		else{
			file_close[i].classList.remove('rotate')
			this.style.display = 'block'
		}
	});
}

//radio button
let radio = document.getElementsByName('method')
let choose_block = document.querySelector('.choose')
let address_block = document.querySelector('.address')
radio[0].onclick = function(){
	choose_block.style.display = 'block'
	address_block.style.display = 'none'
}
radio[1].onclick = function(){
	choose_block.style.display = 'none'
	address_block.style.display = 'block'
}
//open block
const order_block = document.querySelector('.order-online-1')
const btn_order_online = document.querySelectorAll('.btn-order-online')
const order_online_close = document.getElementById('order-online-close')
const order_online_top = document.getElementById('order-online-top')
const order_online_menu_block = document.getElementById('order-online-menu-block')

order_online_close.onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'none'
}
order_online_menu_block.onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'block'
}
order_online_top.onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'block'
}

for(let i = 0; i < btn_order_online.length; i++){
	btn_order_online[i].addEventListener('click', function(e){
		e.preventDefault()
		order_block.style.display = 'block'
	})
}
