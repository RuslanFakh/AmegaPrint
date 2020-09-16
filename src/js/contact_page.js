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
