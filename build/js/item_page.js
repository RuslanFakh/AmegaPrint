"use strict";var costTab=document.getElementById("btn-cost"),possibilityTab=document.getElementById("btn-possibility"),videoTab=document.getElementById("btn-video"),costBlock=document.querySelector(".price-list-main .cost-block"),possibilityBlock=document.querySelector(".price-list-main .possibility"),videoBlock=document.querySelector(".price-list-main .video-block"),active="active";function addClass(e,t){e.classList.add(t)}function removeClass(e,t){e.classList.remove(t)}function block(e){e.style.display="block"}function none(e){e.style.display="none"}costTab.onclick=function(e){e.preventDefault(),block(costBlock),addClass(costTab,active),none(possibilityBlock),none(videoBlock),removeClass(possibilityTab,active),removeClass(videoTab,active)},possibilityTab.onclick=function(e){e.preventDefault(),block(possibilityBlock),addClass(possibilityTab,active),none(costBlock),none(videoBlock),removeClass(costTab,active),removeClass(videoTab,active)},videoTab.onclick=function(e){e.preventDefault(),block(videoBlock),addClass(videoTab,active),none(possibilityBlock),none(costBlock),removeClass(costTab,active),removeClass(possibilityTab,active)},$(".slider-2-img").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-2-line"}),$(".slider-2-line").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".slider-2-img",dots:!1,centerMode:!0,focusOnSelect:!0,accessibility:!0,arrows:!0,prevArrow:$(".btn-prev"),nextArrow:$(".btn-next")});var btn_menu=document.querySelector(".btn-menu"),btn_close=document.querySelector(".close"),mobile_block=document.querySelector(".bg-mobile-menu");btn_menu.onclick=function(e){e.preventDefault(),document.body.style.overflow="hidden",mobile_block.style.display="block"},btn_close.onclick=function(e){e.preventDefault(),document.body.style.overflow="",mobile_block.style.display="none"},document.querySelectorAll(".select").forEach(function(t){var n=t.querySelector(".select__current"),e=t.querySelector(".select__list"),l=t.querySelector(".select__input"),o=t.querySelectorAll(".select__item");n.addEventListener("click",function(){e.classList.toggle("select__list--show")}),o.forEach(function(o){o.addEventListener("click",function(){var e=o.getAttribute("data-value"),t=o.textContent;l.value=e,n.textContent=t,c()})});var c=function(){e.classList.remove("select__list--show")};document.addEventListener("mouseup",function(e){t.contains(e.target)||c()})});var year=document.getElementById("year"),date=new Date;year.innerHTML=date.getFullYear();var chat=document.getElementById("chat");chat.onclick=function(e){e.preventDefault(),alert("Это чат!")};var pay=document.getElementById("pay-btn"),pay_block=document.querySelector(".pay-online"),pay_close=document.querySelector("#close-pay");pay.onclick=function(e){e.preventDefault(),pay_block.style.display="block"},pay_close.onclick=function(e){e.preventDefault(e),pay_block.style.display="none"};var a,b,send=document.getElementById("btn-pay"),field_number=document.getElementById("order-number"),field_sum=document.getElementById("sum"),warning=document.querySelector(".warning");field_number.addEventListener("input",function(){a=document.getElementById("order-number").value}),field_sum.addEventListener("input",function(){b=document.getElementById("sum").value}),send.onclick=function(e){e.preventDefault(),""!==a&&""!==b||(warning.style.display="block")};var message_director=document.getElementById("dir_mes"),close_mes=document.querySelector("#close-mes-dir"),mail_director_block=document.querySelector(".mail-to-director");message_director.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},close_mes.onclick=function(e){e.preventDefault(),mail_director_block.style.display="none"};var fileInput=document.querySelector("#file"),button=document.querySelector("#btn"),the_return=document.querySelector(".file-name");button.addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||fileInput.focus()}),button.addEventListener("click",function(e){return e.preventDefault(),fileInput.focus(),!1}),fileInput.addEventListener("change",function(e){the_return.value=this.value});var radio=document.getElementsByName("method"),choose_block=document.querySelector(".choose"),address_block=document.querySelector(".address");radio[0].onclick=function(){choose_block.style.display="block",address_block.style.display="none"},radio[1].onclick=function(){choose_block.style.display="none",address_block.style.display="block"};var order_block=document.querySelector(".order-online-1"),btn_order_online=document.querySelectorAll(".btn-order-online"),order_online_close=document.getElementById("order-online-close");order_online_close.onclick=function(e){e.preventDefault(),order_block.style.display="none"},btn_order_online[0].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[1].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[2].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[3].onclick=function(e){e.preventDefault(),order_block.style.display="block"};