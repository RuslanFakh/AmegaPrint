!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():function n(){document&&document.body?t.zenscroll=e():setTimeout(n,9)}()}(this,function(){"use strict";var t=function(t){return t&&"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){n=n||999,o||0===o||(o=9);var i,r=function(t){i=t},u=function(){clearTimeout(i),r(0)},c=function(t){return Math.max(0,e.getTopOf(t)-o)},a=function(o,i,c){if(u(),0===i||i&&i<0||t(e.body))e.toY(o),c&&c();else{var a=e.getY(),f=Math.max(0,o)-a,s=(new Date).getTime();i=i||Math.min(Math.abs(f),n),function t(){r(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-s)/i),o=Math.max(0,Math.floor(a+f*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(o),n<1&&e.getHeight()+o<e.body.scrollHeight?t():(setTimeout(u,99),c&&c())},9))}()}},f=function(t,e,n){a(c(t),e,n)},s=function(t,n,i){var r=t.getBoundingClientRect().height,u=e.getTopOf(t)+r,s=e.getHeight(),l=e.getY(),d=l+s;c(t)<l||r+o>s?f(t,n,i):u+o>d?a(u-s+o,n,i):i&&i()},l=function(t,n,o,i){a(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(o||t.getBoundingClientRect().height/2)),n,i)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(o=e),{defaultDuration:n,edgeOffset:o}},to:f,toY:a,intoView:s,center:l,stop:u,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(t,o,i){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},o,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var r="history"in window&&"pushState"in history,u=r&&"scrollRestoration"in history;u&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){u&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=i.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=Math.max(0,i.getTopOf(e)-t),o=i.getY()-n;0<=o&&o<9&&window.scrollTo(0,n)}}},9)},!1);var c=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(u){var n=history.state&&"object"==typeof history.state?history.state:{};n.zenscrollY=i.getY();try{history.replaceState(n,"")}catch(t){}}var o=e.getAttribute("href")||"";if(0===o.indexOf("#")&&!c.test(e.className)){var a=0,f=document.getElementById(o.substring(1));if("#"!==o){if(!f)return;a=i.getTopOf(f)}t.preventDefault();var s=function(){window.location=o},l=i.setup().edgeOffset;l&&(a=Math.max(0,a-l),r&&(s=function(){history.pushState({},"",o)})),i.toY(a,null,s)}}},!1)}return i});
// window.onload = function(){
	// console.log(localStorage.getItem('adressAmegaPrintStreet'))
	// console.log(document.getElementById(localStorage.getItem('adressAmegaPrintStreet')))
setTimeout(function(){
	if(localStorage.getItem('adressAmegaPrintStreet') != null){
		const down = document.getElementById(localStorage.getItem('adressAmegaPrintStreet'))
		zenscroll.to(down, 1000)
	}
}, 400)


// }

document.addEventListener('keydown', function(e) {
	if (e.code === 'Escape') {
		document.body.style.overflow = ''
		mobile_block.style.display = 'none'
		pay_block.style.display = 'none'
		mail_director_block.style.display = 'none'
		order_block.style.display = 'none'
		summary_block.style.display = 'none'
	}
});


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


///////////////////////////// 2020
const year = document.getElementById('year')
let date = new Date()
year.innerHTML = date.getFullYear()

///////////////////chat
const chat = document.getElementById('chat')
chat.onclick = function(e){
	e.preventDefault()
	alert('Это чат!')
}

///////////////////// online pay
const pay = document.getElementById('pay-btn')
const pay_block = document.querySelector('.pay-online')
const pay_close = document.querySelector('#close-pay')
pay.onclick = function(e){
	e.preventDefault()
	pay_block.style.display = 'block'
}
pay_close.onclick = function(e){
	e.preventDefault(e)
	pay_block.style.display = 'none'
}

///////////////////// mail to director
const message_director = document.getElementById('dir_mes')
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
const fileInput  = document.querySelectorAll( ".d-flex input.file" ),
    button     = document.querySelectorAll( ".d-flex .btn" ),
		the_return = document.querySelectorAll(".d-flex .file-name"),
		file_close = document.querySelectorAll('.d-flex .btn img')
for(let i = 0; i < 6; i++){
	button[i].addEventListener( "click", function( event ) {
		event.preventDefault()
		the_return[i].value = ''
		the_return[i].classList.remove('accept-bg')
		file_close[i].classList.remove('rotate')
		fileInput[i].style.display = 'block'
		fileInput[i].value = ''
	});
}
for(let i = 0; i < 6; i++){
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
order_online_close.onclick = function(e){
	e.preventDefault()
	order_block.style.display = 'none'
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

///////////// summary
const summary_close = document.getElementById('summary-close')
const summary_block = document.querySelector('.summary')
const here = document.querySelector('.here')
here.onclick = function(e){
	e.preventDefault()
	summary_block.style.display = 'block'
}
summary_close.onclick = function(e){
	e.preventDefault()
	summary_block.style.display = 'none'
}
