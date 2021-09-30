"use strict";

let header = document.getElementById('header');
let massage_view_1 = document.getElementById('massage_view_1');
let massage_view_2 = document.getElementById('massage_view_2');
let massage_view_3 = document.getElementById('massage_view_3');
let desc_cont = document.getElementById('description_cont');
let desc_head = document.getElementById('desc_head');
let desc_text = document.getElementById('desc_text');
let img = document.getElementById('desc_img');
let header_mass_views = document.getElementById('header_mass_views');
let about_sect = document.getElementById('about_sect');
let button_right = document.getElementById('button_right');
let button_left = document.getElementById('button_left');
let button_up = document.getElementById('button_up');
let view_1 = document.getElementById('head_view_1');
let	view_2 = document.getElementById('head_view_2');
let	view_3 = document.getElementById('head_view_3');
let contact_cont = document.getElementById('contact_cont');
let close_but = document.getElementById('close_but');
let contacts = document.getElementById('contacts');
let close_cont = document.getElementById('close_cont');
let curtain = document.getElementById('curtain');
let massage_sect = document.getElementById('massage_sect');


function head_mass_show_2(){
	 sessionStorage.setItem('show_views', "show")
	 const views_list = document.querySelectorAll('#view_list_el')
	 view_list_el_close.setAttribute('class', 'views_cl_but_show')
	 for(let i = 0; i < views_list.length; i++){
	   views_list[i].setAttribute('class','view_list_el')
	 }
}

function head_mass_close_2(){
	 sessionStorage.setItem('show_views', "hide")
	 const views_list = document.querySelectorAll('#view_list_el')
	 view_list_el_close.setAttribute('class', 'view_list_el_hide')
	 for(let i = 0; i < views_list.length; i++){
	   views_list[i].setAttribute('class','view_list_el_hide')
	 }
}


function show_contact() {
  header.setAttribute('class', 'header header_blur');
  contacts.setAttribute('class', 'contacts');
  close_cont.setAttribute('class', 'close_cont');
  contact_cont.setAttribute('class', 'contact_cont');
  cover_curtain();
}

function close_contact(){
	header.setAttribute('class', 'header header_no_blur');
	contacts.setAttribute('class', 'contacts_opac');
	close_cont.setAttribute('class', 'close_cont_opac');
	contact_cont.setAttribute('class', 'contact_cont_hide');
	setTimeout(()=>{
	  contacts.setAttribute('class', 'hidden');
	  close_cont.setAttribute('class', 'hidden');
	  contact_cont.setAttribute('class', 'hidden');
	  cover_curtain_hide();
	}, 400)
} 

function cover_curtain() {
  curtain.setAttribute('class', 'cover_curtain');
}

function cover_curtain_hide() {
	curtain.setAttribute('class', 'hidden');
}

function cond_views(){
	let views_condition = sessionStorage.getItem('show_views')
	if(views_condition === "show") {
		head_mass_show_2()
  }
  else {
  head_mass_close_2()
  }
}

cond_views()


 
