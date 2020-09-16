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
