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
