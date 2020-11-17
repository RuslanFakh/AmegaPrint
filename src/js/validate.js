window.onload = function () {
  document.querySelectorAll('.select__current').forEach(elem => {
    if(localStorage.getItem('adressAmegaPrint')){
      elem.textContent = localStorage.getItem('adressAmegaPrint')
      elem.style.color = 'black'
    }
    else if (localStorage.getItem('adressAmegaPrint') == null){
      elem.textContent = 'Выберите адрес'
    }
  })
  // console.log(typeof localStorage.getItem('adressAmegaPrint') + ' : ' + localStorage.getItem('adressAmegaPrint'))
  const input = document.querySelector('input#search');
  input.addEventListener('keyup', function (e) {
    const { value } = e.target;
    if (value === '') return;
    if (e.keyCode === 13) {
      window.location.href = `/search/q=${value}`
    }
  })
}

document.querySelectorAll('.select').forEach(select => { //Выбриаем все выпадающие списки на странице
	let selectCurrent = select.querySelector('.select__current'),
			selectList = select.querySelector('.select__list'),
			selectInput = select.querySelector('.select__input'),
      selectItem = select.querySelectorAll('.select__item');

  if(!localStorage.getItem('adressAmegaPrint')){
    selectCurrent.textContent = localStorage.getItem('adressAmegaPrint')
  }
	selectCurrent.addEventListener('click', () => {//по клику добавляем/удалям класс
		selectList.classList.toggle('select__list--show')
	})
	selectItem.forEach(item =>{//обходим элементы списка
		item.addEventListener('click', ()=>{//обрабатываем событие клик по элементу
      let itemValue = item.getAttribute('data-value')//получаем значение из data-атрибута
      let street = item.getAttribute('street')
      let itemText = item.textContent//получаем содержание элемента (текст)
      localStorage.setItem('adressAmegaPrint', itemText)
      localStorage.setItem('adressAmegaPrintStreet', street)
			selectInput.value = itemValue//присваиваем инпуту ранее полученное значение из data-атрибута
			selectCurrent.textContent = itemText//присваиваем текущее значение (текст)
      selectCurrent.style.color = 'black'
      window.location.href = `/contacts`
      selectListHide()//скрываем выпадающий список
		})
	})
	let selectListHide = () => {// функция закрытия выпадающего списка
		selectList.classList.remove('select__list--show')
	}
	document.addEventListener('mouseup', (e) =>{//Закрываем выпадающий сисок, если клик был вне области
    if (!select.contains(e.target))	selectListHide()
  })
})
if(window.innerWidth < 415){
  console.log('+')
}
else{
  console.log('-')
}
console.log(window.innerWidth + ' Width')
///////////    map
function map(){
    const wrapMap = document.querySelector('.map')
    var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
    mapTitle.textContent = 'Для активации карты нажмите по ней';// вписываем нужный нам текст внутрь элемента
    wrapMap.appendChild(mapTitle);// добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
    wrapMap.onclick = function() {// по клику на карту
      this.children[0].classList.remove('pointer-events'); // убираем атрибут "style", в котором прописано свойство "pointer-events"
      mapTitle.parentElement.removeChild(mapTitle);// удаляем элемент с интерактивной подсказкой

    }

    wrapMap.onmousemove = function(event) {// по движению мыши в области карты
        mapTitle.style.display = 'block';// показываем подсказку
        if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';// двигаем подсказку по области карты вместе с мышкой пользователя
        if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
    }

    wrapMap.onmouseleave = function() {// при уходе указателя мыши с области карты
      mapTitle.style.display = 'none';// прячем подсказку
    }

}
if(window.innerWidth > 414){
  map()
}
else{
  const map = document.querySelector('.map iframe')
  map.classList.remove('pointer-events')
}



/////////////////////         pay-online
const sum = document.getElementById('sum')
const p_sum = document.getElementById('p-sum')
const order_number = document.getElementById('order-number')
const p_order_number = document.getElementById('p-order-number')
const btn_pay = document.getElementById('btn-pay')

btn_pay.addEventListener('click', function(e){
  // if(sum.value == '') {
  //   displayBlock(e, p_sum)
  // }
  // if(order_number.value == '') {
  //   p_order_number.style.display = 'block'
  //   e.preventDefault()
  // }
  displayBlock(sum, p_sum, e)
  displayBlock(order_number, p_order_number, e)
})
sum.oninput = function(){
  p_sum.style.display = 'none'
}
order_number.oninput = function(){
  p_order_number.style.display = 'none'
}

function displayBlock(input, p, e){
  if(input.value == ''){
    e.preventDefault()
    p.style.display = 'block'
  }

}
function displayNone(p){
  p.style.display = 'none'
}

/////////////////    mail to director

//inputs
const md_name = document.getElementById('md-name')
const md_phone = document.getElementById('md-phone')
const md_mail = document.getElementById('md-email')
//messages
const p_md_name = document.getElementById('p-md-name')
const p_md_phone = document.getElementById('p-md-phone')
const p_md_mail = document.getElementById('p-md-mail')
//submit
const md_send = document.getElementById('md-send')
$("#md-phone").mask("8(999) 999-9999");
md_send.addEventListener('click', function(e){
  displayBlock(md_name, p_md_name, e)
  displayBlock(md_phone, p_md_phone, e)
  displayBlock(md_mail, p_md_mail, e)
})
md_name.oninput = function(){
  p_md_name.style.display = 'none'
}
md_phone.onchange = function(){
  p_md_phone.style.display = 'none'
}
md_mail.oninput = function(){
  p_md_mail.style.display = 'none'
}

///////////////////    order online
//inputs
const oo_name = document.getElementById('oo-name')
const oo_surname = document.getElementById('oo-surname')
const oo_phone = document.getElementById('oo-phone')
const oo_mail = document.getElementById('oo-email')

//messages
const p_oo_name = document.getElementById('p-oo-name')
const p_oo_surname = document.getElementById('p-oo-surname')
const p_oo_phone = document.getElementById('p-oo-phone')
const p_oo_mail = document.getElementById('p-oo-mail')
const p_oo_file = document.getElementById('p-oo-file')

const files = document.querySelectorAll('.d-flex .file-name')

const btn_send_order = document.getElementById('btn-send-order')

$("#oo-phone").mask("8(999) 999-9999");

btn_send_order.addEventListener('click', function(e){
  displayBlock(oo_name, p_oo_name, e)
  displayBlock(oo_surname, p_oo_surname, e)
  displayBlock(oo_phone, p_oo_phone, e)
  displayBlock(oo_mail, p_oo_mail, e)

  let count = 0
  for(let i = 0; i < files.length; i ++){
    if(files[i].value == ''){
      count++
    }
    if(count == files.length){
      e.preventDefault()
      p_oo_file.style.display = 'block'
    }
  }
})
oo_name.oninput = function(){
  p_oo_name.style.display = 'none'
}
oo_surname.oninput = function(){
  p_oo_surname.style.display = 'none'
}
oo_phone.onchange = function(){
  p_oo_phone.style.display = 'none'
}
oo_mail.oninput = function(){
  p_oo_mail.style.display = 'none'
}

/////////////////// summary
//inputs
const summary_name = document.getElementById('summary-name')
const summary_phone = document.getElementById('summary-phone')
const summary_mail = document.getElementById('summary-mail')
const summary_file = document.getElementById('file-name-123')
//messages
const p_summary_name = document.getElementById('p-summary-name')
const p_summary_phone = document.getElementById('p-summary-phone')
const p_summary_mail = document.getElementById('p-summary-mail')
const p_summary_file = document.getElementById('p-summary-file')

const btn_summary = document.getElementById('btn-summary')
$("#summary-phone").mask("8(999) 999-9999");
btn_summary.addEventListener('click', function(e){
  displayBlock(summary_name, p_summary_name, e)
  displayBlock(summary_phone, p_summary_phone, e)
  displayBlock(summary_mail, p_summary_mail, e)
  displayBlock(summary_file, p_summary_file, e)
})
summary_name.oninput = function(){
  p_summary_name.style.display = 'none'
}
summary_phone.onchange = function(){
  p_summary_phone.style.display = 'none'
}
summary_mail.oninput = function(){
  p_summary_mail.style.display = 'none'
}
