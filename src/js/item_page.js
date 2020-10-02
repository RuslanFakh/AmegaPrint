const costTab = document.getElementById('btn-cost')
const possibilityTab = document.getElementById('btn-possibility')
const videoTab = document.getElementById('btn-video')

const costBlock = document.querySelector('.price-list-main .cost-block')
const possibilityBlock = document.querySelector('.price-list-main .possibility')
const videoBlock = document.querySelector('.price-list-main .video-block')

const active = 'active'

costTab.onclick = function(e){
  e.preventDefault();
  block(costBlock)
  addClass(costTab, active)

  none(possibilityBlock)
  none(videoBlock)

  removeClass(possibilityTab, active)
  removeClass(videoTab, active)
}
possibilityTab.onclick = function(e){
  e.preventDefault();
  block(possibilityBlock)
  addClass(possibilityTab, active)

  none(costBlock)
  none(videoBlock)

  removeClass(costTab, active)
  removeClass(videoTab, active)
}
videoTab.onclick = function(e){
  e.preventDefault()
  block(videoBlock)
  addClass(videoTab, active)

  none(possibilityBlock)
  none(costBlock)

  removeClass(costTab, active)
  removeClass(possibilityTab, active)
}

function addClass(item, class_){
  item.classList.add(class_)
}
function removeClass(item, class_){
  item.classList.remove(class_)
}
function block(item){
  item.style.display = 'block'
}
function none(item){
  item.style.display = 'none'
}

$('.slider-2-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-2-line',

});
$('.slider-2-line').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-2-img',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  accessibility: true,
  arrows: true,
  prevArrow: $('.btn-prev'),
  nextArrow: $('.btn-next')
});

//slider



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

const year = document.getElementById('year')
let date = new Date()
year.innerHTML = date.getFullYear()

///////////////// chat
const chat = document.getElementById('chat')
chat.onclick = function(e){
	e.preventDefault()
	alert('Это чат!')
}
///////////////////// pay

const pay = document.getElementById('pay-btn')
// const pay1 = document.querySelector('.pay-btn1')
const pay_block = document.querySelector('.pay-online')
const pay_close = document.querySelector('#close-pay')
pay.onclick = function(e){
	e.preventDefault()
	pay_block.style.display = 'block'
	// alert(1)
}
// pay1.onclick = function(e){
// 	e.preventDefault()
// 	pay_block.style.display = 'block'
// 	// alert(1)
// }
pay_close.onclick = function(e){
	e.preventDefault(e)
	pay_block.style.display = 'none'
}


//////////////////////// form

const send = document.getElementById('btn-pay')
const field_number = document.getElementById('order-number')
const field_sum = document.getElementById('sum')
const warning = document.querySelector('.warning')


let a, b
field_number.addEventListener('input', function(){
	a = document.getElementById('order-number').value
})
field_sum.addEventListener('input', function(){
	b = document.getElementById('sum').value
})
send.onclick = function(e){
	e.preventDefault()
	if((a === '') || (b === '')){
		warning.style.display = 'block'
	}
}


///////////////////// mail to director

const message_director = document.getElementById('dir_mes')
// const message_director1 = document.getElementById('dir_mes1')
const close_mes = document.querySelector('#close-mes-dir')
const mail_director_block = document.querySelector('.mail-to-director')
const mobile_dm = document.getElementById('mobile-dm')
const director_message_side = document.getElementById('director-message-side')

director_message_side.onclick = function(e){
	e.preventDefault()
	mail_director_block.style.display = 'block'
}
message_director.onclick = function(e){
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
var fileInput  = document.querySelector( "#file" ),
    button     = document.querySelector( "#btn" ),
		the_return = document.querySelector(".file-name");

button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
button.addEventListener( "click", function( event ) {
	event.preventDefault()
   fileInput.focus();
   return false;
});
fileInput.addEventListener( "change", function( event ) {
    the_return.value = this.value;
});

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
let order_online_top = document.getElementById('order-online-top')
const btn_order_online_rigth = document.querySelectorAll('.btn-order-online-rigth')

order_online_close.onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'none'
}

btn_order_online_rigth[0].onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'block'
}
btn_order_online_rigth[1].onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'block'
}
order_online_top.onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'block'
}
btn_order_online[0].onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'block'
}
btn_order_online[1].onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'block'
}
btn_order_online[2].onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'block'
}
btn_order_online[3].onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'block'
}

// for( let i = 0; i < btn_order_online.lengthl; i++ ){
// 	btn_order_online[i].addEventListener('click', function(e){
// 		e.preventDefault()
// 		orderBlock(e)
// 	})
// }
