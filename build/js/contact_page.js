"use strict";document.addEventListener("keydown",function(e){"Escape"===e.code&&(document.body.style.overflow="",mobile_block.style.display="none",pay_block.style.display="none",mail_director_block.style.display="none",order_block.style.display="none",summary_block.style.display="none")});var listContact=document.querySelector(".contact-list .title-tabs .btn-list"),mapContact=document.querySelector(".contact-list .title-tabs .btn-map"),listBlock=document.querySelector(".contact-list .contact-list-blocks"),mapBlock=document.querySelector(".contact-list .contact-list-map");listContact.onclick=function(e){e.preventDefault(),listBlock.style.display="block",mapBlock.style.display="none",listContact.classList.add("active"),mapContact.classList.remove("active")},mapContact.onclick=function(e){e.preventDefault(),listBlock.style.display="none",mapBlock.style.display="block",listContact.classList.remove("active"),mapContact.classList.add("active")};var btn_menu=document.querySelector(".btn-menu"),btn_close=document.querySelector(".close"),mobile_block=document.querySelector(".bg-mobile-menu");btn_menu.onclick=function(e){e.preventDefault(),document.body.style.overflow="hidden",mobile_block.style.display="block"},btn_close.onclick=function(e){e.preventDefault(),document.body.style.overflow="",mobile_block.style.display="none"},document.querySelectorAll(".select").forEach(function(t){var o=t.querySelector(".select__current"),e=t.querySelector(".select__list"),c=t.querySelector(".select__input"),l=t.querySelectorAll(".select__item");o.addEventListener("click",function(){e.classList.toggle("select__list--show")}),l.forEach(function(l){l.addEventListener("click",function(){var e=l.getAttribute("data-value"),t=l.textContent;c.value=e,o.textContent=t,n()})});var n=function(){e.classList.remove("select__list--show")};document.addEventListener("mouseup",function(e){t.contains(e.target)||n()})});var year=document.getElementById("year"),date=new Date;year.innerHTML=date.getFullYear();var chat=document.getElementById("chat");chat.onclick=function(e){e.preventDefault(),alert("Это чат!")};var pay=document.getElementById("pay-btn"),pay_block=document.querySelector(".pay-online"),pay_close=document.querySelector("#close-pay");pay.onclick=function(e){e.preventDefault(),pay_block.style.display="block"},pay_close.onclick=function(e){e.preventDefault(e),pay_block.style.display="none"};var message_director=document.getElementById("dir_mes"),close_mes=document.querySelector("#close-mes-dir"),mail_director_block=document.querySelector(".mail-to-director"),mobile_dm=document.getElementById("mobile-dm"),director_message_side=document.getElementById("director-message-side");director_message_side.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},message_director.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},mobile_dm.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},close_mes.onclick=function(e){e.preventDefault(),mail_director_block.style.display="none"};for(var fileInput=document.querySelectorAll(".d-flex input.file"),button=document.querySelectorAll(".d-flex .btn"),the_return=document.querySelectorAll(".d-flex .file-name"),file_close=document.querySelectorAll(".d-flex .btn img"),_loop=function(t){button[t].addEventListener("click",function(e){e.preventDefault(),the_return[t].value="",the_return[t].classList.remove("accept-bg"),file_close[t].classList.remove("rotate"),fileInput[t].style.display="block",fileInput[t].value=""})},i=0;i<6;i++)_loop(i);for(var _loop2=function(t){fileInput[t].addEventListener("change",function(e){the_return[t].value=this.value,""!=the_return[t].value?(file_close[t].classList.add("rotate"),the_return[t].classList.add("accept-bg"),this.style.display="none"):(file_close[t].classList.remove("rotate"),this.style.display="block")})},_i=0;_i<6;_i++)_loop2(_i);var radio=document.getElementsByName("method"),choose_block=document.querySelector(".choose"),address_block=document.querySelector(".address");radio[0].onclick=function(){choose_block.style.display="block",address_block.style.display="none"},radio[1].onclick=function(){choose_block.style.display="none",address_block.style.display="block"};var order_block=document.querySelector(".order-online-1"),btn_order_online=document.querySelectorAll(".btn-order-online"),order_online_close=document.getElementById("order-online-close"),order_online_top=document.getElementById("order-online-top");order_online_close.onclick=function(e){e.preventDefault(),order_block.style.display="none"},order_online_top.onclick=function(e){e.preventDefault(),order_block.style.display="block"};for(var _i2=0;_i2<btn_order_online.length;_i2++)btn_order_online[_i2].addEventListener("click",function(e){e.preventDefault(),order_block.style.display="block"});var summary_close=document.getElementById("summary-close"),summary_block=document.querySelector(".summary"),here=document.querySelector(".here");here.onclick=function(e){e.preventDefault(),summary_block.style.display="block"},summary_close.onclick=function(e){e.preventDefault(),summary_block.style.display="none"};