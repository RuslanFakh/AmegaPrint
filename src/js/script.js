//contact_page
let listContact = document.querySelector('.contact-list .title-tabs .btn-list')
let mapContact = document.querySelector('.contact-list .title-tabs .btn-map')
let listBlock = document.querySelector('.contact-list .contact-list-blocks')
let mapBlock = document.querySelector('.contact-list .contact-list-map')

let costTab = document.querySelector('.price-list .title-tabs .btn-cost')
let possibilityTab = document.getElementById('btn-possibility')

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

//item_page
// let costTab = document.querySelector('.price-list .title-tabs .btn-cost')
// let possibilityTab = document.getElementById('btn-possibility')

costTab.onclick = function(e){
  e.preventDefault();
  alert(1)
}
possibilityTab.onclick = function(e){
  e.preventDefault();
  alert(2)
}
