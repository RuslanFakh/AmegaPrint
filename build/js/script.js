"use strict";var btn_menu=document.querySelector(".btn-menu"),btn_close=document.querySelector(".close"),mobile_block=document.querySelector(".bg-mobile-menu");btn_menu.onclick=function(e){e.preventDefault(),document.body.style.overflow="hidden",mobile_block.style.display="block"},btn_close.onclick=function(e){e.preventDefault(),document.body.style.overflow="",mobile_block.style.display="none"},document.querySelectorAll(".select").forEach(function(t){var l=t.querySelector(".select__current"),e=t.querySelector(".select__list"),n=t.querySelector(".select__input"),o=t.querySelectorAll(".select__item");l.addEventListener("click",function(){e.classList.toggle("select__list--show")}),o.forEach(function(o){o.addEventListener("click",function(){var e=o.getAttribute("data-value"),t=o.textContent;n.value=e,l.textContent=t,c()})});var c=function(){e.classList.remove("select__list--show")};document.addEventListener("mouseup",function(e){t.contains(e.target)||c()})});var year=document.getElementById("year"),date=new Date;year.innerHTML=date.getFullYear();var chat=document.getElementById("chat");chat.onclick=function(e){e.preventDefault(),alert("Это чат!")};var pay=document.getElementById("pay-btn"),pay1=document.querySelector(".pay-btn1"),pay_block=document.querySelector(".pay-online"),pay_close=document.querySelectorAll(".close-pay");pay.onclick=function(e){e.preventDefault(),pay_block.style.display="block"},pay1.onclick=function(e){e.preventDefault(),pay_block.style.display="block"},pay_close[0].onclick=function(e){e.preventDefault(e),pay_block.style.display="none"};var message_director=document.getElementById("dir_mes"),message_director1=document.getElementById("dir_mes1"),close_mes=document.querySelector("#close-mes-dir"),mail_director_block=document.querySelector(".mail-to-director"),mobile_dm=document.getElementById("mobile-dm");message_director.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},message_director1.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},mobile_dm.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},close_mes.onclick=function(e){e.preventDefault(),mail_director_block.style.display="none"};var fileInput=document.querySelectorAll(".d-flex input.file"),button=document.querySelectorAll(".d-flex .btn"),the_return=document.querySelectorAll(".d-flex .file-name");file_close=document.querySelectorAll(".d-flex .btn img");for(var _loop=function(t){button[t].addEventListener("click",function(e){e.preventDefault(),the_return[t].value="",file_close[t].classList.remove("rotate"),fileInput[t].style.display="block",console.log("".concat(t," = ").concat(the_return[t].value))})},i=0;i<button.length;i++)_loop(i);for(var _loop2=function(t){fileInput[t].addEventListener("change",function(e){the_return[t].value=this.value,""!=the_return[t].value?(file_close[t].classList.add("rotate"),this.style.display="none"):(file_close[t].classList.remove("rotate"),this.style.display="block")})},_i=0;_i<fileInput.length;_i++)_loop2(_i);var radio=document.getElementsByName("method"),choose_block=document.querySelector(".choose"),address_block=document.querySelector(".address");radio[0].onclick=function(){choose_block.style.display="block",address_block.style.display="none"},radio[1].onclick=function(){choose_block.style.display="none",address_block.style.display="block"};var order_block=document.querySelector(".order-online-1"),btn_order_online=document.querySelectorAll(".btn-order-online"),order_online_close=document.getElementById("order-online-close"),order_online_top=document.getElementById("order-online-top"),order_online_menu_block=document.getElementById("order-online-menu-block");order_online_close.onclick=function(e){e.preventDefault(),order_block.style.display="none"},order_online_menu_block.onclick=function(e){e.preventDefault(),order_block.style.display="block"},order_online_top.onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[0].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[1].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[2].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[3].onclick=function(e){e.preventDefault(),order_block.style.display="block"};var ask_question=document.querySelector(".ask-question"),question_btn=document.getElementById("question-btn"),close_ask_question=document.getElementById("close-ask-question");question_btn.onclick=function(e){e.preventDefault(),ask_question.style.display="block"},close_ask_question.onclick=function(e){e.preventDefault(),ask_question.style.display="none"};