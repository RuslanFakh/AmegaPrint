window.onload = function () {
  // localStorage.clear()
  // const aaaa = document.querySelectorAll('.select__current')
  // if(localStorage.getItem('adressAmegaPrint')){
  //   aaaa.forEach(elem =>{
  //     elem.textContent = localStorage.getItem('adressAmegaPrint')
  //     elem.style.color = 'black'
  //   })
  // }
  // else if(localStorage.getItem('adressAmegaPrint') == null){
  //   aaaa.forEach( elem => {
  //     elem.textContent = 'Выберите адрес'
  //   })
  // }
  document.querySelectorAll('.select__current').forEach(elem => {
    if(localStorage.getItem('adressAmegaPrint')){
      elem.textContent = localStorage.getItem('adressAmegaPrint')
      elem.style.color = 'black'
    }
    else if (localStorage.getItem('adressAmegaPrint') == null){
      elem.textContent = 'Выберите адрес'
    }
  })
  console.log(typeof localStorage.getItem('adressAmegaPrint') + ' : ' + localStorage.getItem('adressAmegaPrint'))
  const input = document.querySelector('input#search');
  input.addEventListener('keyup', function (e) {
    const { value } = e.target;
    if (value === '') return;
    if (e.keyCode === 13) {
      window.location.href = `/search/q=${value}`
    }
  })
}

///////////////////////////// select
// if(localStorage.getItem('adressAmegaPrint') == null){
//   document.querySelectorAll('.select__current').forEach( elem => {
//     elem.textContent = 'Выберите адрес'
//   })
// }

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
      let itemText = item.textContent//получаем содержание элемента (текст)
      localStorage.setItem('adressAmegaPrint', itemText)
			selectInput.value = itemValue//присваиваем инпуту ранее полученное значение из data-атрибута
			selectCurrent.textContent = itemText//присваиваем текущее значение (текст)
      selectCurrent.style.color = 'black'
      window.location.href = '/contacts/'
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
