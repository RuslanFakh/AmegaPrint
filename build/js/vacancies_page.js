"use strict";var btn_menu=document.querySelector(".btn-menu"),btn_close=document.querySelector(".close"),mobile_block=document.querySelector(".bg-mobile-menu");btn_menu.onclick=function(e){e.preventDefault(),document.body.style.overflow="hidden",mobile_block.style.display="block"},btn_close.onclick=function(e){e.preventDefault(),document.body.style.overflow="",mobile_block.style.display="none"},document.querySelectorAll(".select").forEach(function(t){var o=t.querySelector(".select__current"),e=t.querySelector(".select__list"),n=t.querySelector(".select__input"),l=t.querySelectorAll(".select__item");o.addEventListener("click",function(){e.classList.toggle("select__list--show")}),l.forEach(function(l){l.addEventListener("click",function(){var e=l.getAttribute("data-value"),t=l.textContent;n.value=e,o.textContent=t,c()})});var c=function(){e.classList.remove("select__list--show")};document.addEventListener("mouseup",function(e){t.contains(e.target)||c()})});var year=document.getElementById("year"),date=new Date;year.innerHTML=date.getFullYear();var chat=document.getElementById("chat");chat.onclick=function(e){e.preventDefault(),alert("Это чат!")};var pay=document.getElementById("pay-btn"),pay_block=document.querySelector(".pay-online"),pay_close=document.querySelector("#close-pay");pay.onclick=function(e){e.preventDefault(),pay_block.style.display="block"},pay_close.onclick=function(e){e.preventDefault(e),pay_block.style.display="none"};var a,b,send=document.getElementById("btn-pay"),field_number=document.getElementById("order-number"),field_sum=document.getElementById("sum"),warning=document.querySelector(".warning");field_number.addEventListener("input",function(){a=document.getElementById("order-number").value}),field_sum.addEventListener("input",function(){b=document.getElementById("sum").value}),send.onclick=function(e){e.preventDefault(),""!==a&&""!==b||(warning.style.display="block")};var message_director=document.getElementById("dir_mes"),close_mes=document.querySelector("#close-mes-dir"),mail_director_block=document.querySelector(".mail-to-director"),mobile_dm=document.getElementById("mobile-dm"),director_message_side=document.getElementById("director-message-side");director_message_side.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},message_director.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},mobile_dm.onclick=function(e){e.preventDefault(),mail_director_block.style.display="block"},close_mes.onclick=function(e){e.preventDefault(),mail_director_block.style.display="none"};var fileInput=document.querySelectorAll(".d-flex input.file"),button=document.querySelectorAll(".d-flex .btn"),the_return=document.querySelectorAll(".d-flex .file-name");file_close=document.querySelectorAll(".d-flex .btn img");for(var _loop=function(t){button[t].addEventListener("click",function(e){e.preventDefault(),the_return[t].value="",file_close[t].classList.remove("rotate"),fileInput[t].style.display="block",console.log("".concat(t," = ").concat(the_return[t].value))})},i=0;i<button.length;i++)_loop(i);for(var _loop2=function(t){fileInput[t].addEventListener("change",function(e){the_return[t].value=this.value,""!=the_return[t].value?(file_close[t].classList.add("rotate"),this.style.display="none"):(file_close[t].classList.remove("rotate"),this.style.display="block")})},_i=0;_i<fileInput.length;_i++)_loop2(_i);var radio=document.getElementsByName("method"),choose_block=document.querySelector(".choose"),address_block=document.querySelector(".address");radio[0].onclick=function(){choose_block.style.display="block",address_block.style.display="none"},radio[1].onclick=function(){choose_block.style.display="none",address_block.style.display="block"};var order_block=document.querySelector(".order-online-1"),btn_order_online=document.querySelectorAll(".btn-order-online"),order_online_close=document.getElementById("order-online-close"),order_online_top=document.getElementById("order-online-top");order_online_close.onclick=function(e){e.preventDefault(),order_block.style.display="none"},order_online_top.onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[0].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[1].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[2].onclick=function(e){e.preventDefault(),order_block.style.display="block"},btn_order_online[3].onclick=function(e){e.preventDefault(),order_block.style.display="block"};fileInput=document.querySelectorAll(".d-flex input.file"),button=document.querySelectorAll(".d-flex .btn"),the_return=document.querySelectorAll(".d-flex .file-name");file_close=document.querySelectorAll(".d-flex .btn img");for(var _loop3=function(t){button[t].addEventListener("click",function(e){e.preventDefault(),the_return[t].value="",file_close[t].classList.remove("rotate"),fileInput[t].style.display="block",console.log("".concat(t," = ").concat(the_return[t].value))})},_i2=0;_i2<button.length;_i2++)_loop3(_i2);for(var _loop4=function(t){fileInput[t].addEventListener("change",function(e){the_return[t].value=this.value,""!=the_return[t].value?(file_close[t].classList.add("rotate"),this.style.display="none"):(file_close[t].classList.remove("rotate"),this.style.display="block")})},_i3=0;_i3<fileInput.length;_i3++)_loop4(_i3);var summary_close=document.getElementById("summary-close"),summary_block=document.querySelector(".summary"),here=document.querySelector(".here"),send_summary=document.getElementById("send-summary");send_summary.onclick=function(e){e.preventDefault(),summary_block.style.display="block"},here.onclick=function(e){e.preventDefault(),summary_block.style.display="block"},summary_close.onclick=function(e){e.preventDefault(),summary_block.style.display="none"};