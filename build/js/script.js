"use strict";var btn_menu=document.querySelector(".btn-menu"),btn_close=document.querySelector(".close"),mobile_block=document.querySelector(".bg-mobile-menu");btn_menu.onclick=function(e){e.preventDefault(),document.body.style.overflow="hidden",mobile_block.style.display="block"},btn_close.onclick=function(e){e.preventDefault(),document.body.style.overflow="",mobile_block.style.display="none"},document.querySelectorAll(".select").forEach(function(t){var o=t.querySelector(".select__current"),e=t.querySelector(".select__list"),l=t.querySelector(".select__input"),n=t.querySelectorAll(".select__item");o.addEventListener("click",function(){e.classList.toggle("select__list--show")}),n.forEach(function(n){n.addEventListener("click",function(){var e=n.getAttribute("data-value"),t=n.textContent;l.value=e,o.textContent=t,c()})});var c=function(){e.classList.remove("select__list--show")};document.addEventListener("mouseup",function(e){t.contains(e.target)||c()})});var year=document.getElementById("year"),date=new Date;year.innerHTML=date.getFullYear();var chat=document.getElementById("chat");chat.onclick=function(e){e.preventDefault(),alert("Это чат!")};var pay=document.getElementById("pay-btn"),pay1=document.querySelector(".pay-btn1"),pay_block=document.querySelector(".pay-online"),pay_close=document.querySelectorAll(".close-pay");pay.onclick=function(e){e.preventDefault(),pay_block.style.display="block"},pay1.onclick=function(e){e.preventDefault(),pay_block.style.display="block"},pay_close[0].onclick=function(e){e.preventDefault(e),pay_block.style.display="none"};var message_director=document.getElementById("dir_mes"),message_director1=document.getElementById("dir_mes1"),close_mes=document.querySelector("#close-mes-dir"),mail_director_block=document.querySelector(".mail-to-director"),mobile_dm=document.getElementById("mobile-dm");message_director.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},message_director1.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},mobile_dm.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},close_mes.onclick=function(e){e.preventDefault(),mail_director_block.style.display="none"};var a,b,send=document.getElementById("btn-pay"),field_number=document.getElementById("order-number"),field_sum=document.getElementById("sum"),warning=document.querySelector(".warning");field_number.addEventListener("input",function(){a=document.getElementById("order-number").value}),field_sum.addEventListener("input",function(){b=document.getElementById("sum").value}),send.onclick=function(e){e.preventDefault(),""!==a&&""!==b||(warning.style.display="block")};var fileInput=document.querySelector("#file"),button=document.querySelector("#btn"),the_return=document.querySelector(".file-name");button.addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||fileInput.focus()}),button.addEventListener("click",function(e){return e.preventDefault(),fileInput.focus(),!1}),fileInput.addEventListener("change",function(e){the_return.value=this.value});var radio=document.getElementsByName("method"),choose_block=document.querySelector(".choose"),address_block=document.querySelector(".address");radio[0].onclick=function(){choose_block.style.display="block",address_block.style.display="none"},radio[1].onclick=function(){choose_block.style.display="none",address_block.style.display="block"};var order_block=document.querySelector(".order-online-1"),btn_order_online=document.querySelectorAll(".btn-order-online"),order_online_close=document.getElementById("order-online-close"),order_online_top=document.getElementById("order-online-top");order_online_close.onclick=function(e){e.preventDefault(),order_block.style.display="none"},order_online_top.onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[0].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[1].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[2].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[3].onclick=function(e){e.preventDefault(),order_block.style.display="block"};var ask_question=document.querySelector(".ask-question"),question_btn=document.getElementById("question-btn"),close_ask_question=document.getElementById("close-ask-question");question_btn.onclick=function(e){e.preventDefault(),ask_question.style.display="block"},close_ask_question.onclick=function(e){e.preventDefault(),ask_question.style.display="none"};