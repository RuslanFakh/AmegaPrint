"use strict";var sum=document.getElementById("sum"),p_sum=document.getElementById("p-sum"),order_number=document.getElementById("order-number"),p_order_number=document.getElementById("p-order-number"),btn_pay=document.getElementById("btn-pay");function displayBlock(e,n,m){""==e.value&&(m.preventDefault(),n.style.display="block")}function displayNone(e){e.style.display="none"}btn_pay.addEventListener("click",function(e){displayBlock(sum,p_sum,e),displayBlock(order_number,p_order_number,e)}),sum.oninput=function(){p_sum.style.display="none"},order_number.oninput=function(){p_order_number.style.display="none"};var md_name=document.getElementById("md-name"),md_phone=document.getElementById("md-phone"),md_mail=document.getElementById("md-email"),p_md_name=document.getElementById("p-md-name"),p_md_phone=document.getElementById("p-md-phone"),p_md_mail=document.getElementById("p-md-mail"),md_send=document.getElementById("md-send");$("#md-phone").mask("8(999) 999-9999"),md_send.addEventListener("click",function(e){displayBlock(md_name,p_md_name,e),displayBlock(md_phone,p_md_phone,e),displayBlock(md_mail,p_md_mail,e)}),md_name.oninput=function(){p_md_name.style.display="none"},md_phone.oninput=function(){p_md_phone.style.display="none"},md_mail.oninput=function(){p_md_mail.style.display="none"};var oo_name=document.getElementById("oo-name"),oo_surname=document.getElementById("oo-surname"),oo_phone=document.getElementById("oo-phone"),oo_mail=document.getElementById("oo-email"),p_oo_name=document.getElementById("p-oo-name"),p_oo_surname=document.getElementById("p-oo-surname"),p_oo_phone=document.getElementById("p-oo-phone"),p_oo_mail=document.getElementById("p-oo-mail"),p_oo_file=document.getElementById("p-oo-file"),files=document.querySelectorAll(".d-flex .file-name"),btn_send_order=document.getElementById("btn-send-order");$("#oo-phone").mask("8(999) 999-9999"),btn_send_order.addEventListener("click",function(e){displayBlock(oo_name,p_oo_name,e),displayBlock(oo_surname,p_oo_surname,e),displayBlock(oo_phone,p_oo_phone,e),displayBlock(oo_mail,p_oo_mail,e);for(var n=0,m=0;m<files.length;m++)""==files[m].value&&n++,n==files.length&&(e.preventDefault(),p_oo_file.style.display="block")}),oo_name.oninput=function(){p_oo_name.style.display="none"},oo_surname.oninput=function(){p_oo_surname.style.display="none"},oo_phone.oninput=function(){p_oo_phone.style.display="none"},oo_mail.oninput=function(){p_oo_mail.style.display="none"};var summary_name=document.getElementById("summary-name"),summary_phone=document.getElementById("summary-phone"),summary_mail=document.getElementById("summary-mail"),summary_file=document.getElementById("file-name-123"),p_summary_name=document.getElementById("p-summary-name"),p_summary_phone=document.getElementById("p-summary-phone"),p_summary_mail=document.getElementById("p-summary-mail"),p_summary_file=document.getElementById("p-summary-file"),btn_summary=document.getElementById("btn-summary");$("#summary-phone").mask("8(999) 999-9999"),btn_summary.addEventListener("click",function(e){displayBlock(summary_name,p_summary_name,e),displayBlock(summary_phone,p_summary_phone,e),displayBlock(summary_mail,p_summary_mail,e),displayBlock(summary_file,p_summary_file,e)}),summary_name.oninput=function(){p_summary_name.style.display="none"},summary_phone.oninput=function(){p_summary_phone.style.display="none"},summary_mail.oninput=function(){p_summary_mail.style.display="none"};