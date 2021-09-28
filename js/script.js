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

 
function head_mass_show() {
 sessionStorage.setItem('show_views', "show")
	header.setAttribute('class', 'header header_blur');
	close_but.setAttribute('class', 'head_close');
	cover_curtain();
	setTimeout(()=> {
		view_1.setAttribute('class', 'head_view');
	}, 200);
	setTimeout(()=> {
		view_2.setAttribute('class', 'head_view');
		header_mass_views.setAttribute('class', 'header_massage_views');
	}, 400);
	setTimeout(()=>{
		view_3.setAttribute('class', 'head_view');
	}, 600);
}

function close_views() {
  sessionStorage.setItem('show_views', "hide")
	view_3.setAttribute('class', 'head_v_opac');
	header_mass_views.setAttribute('class', 'head_mass_down');
	// console.log('1');
	setTimeout(()=> {
		view_2.setAttribute('class', 'head_v_opac');
		// console.log('2')
	}, 200);
	setTimeout(()=> {
		view_1.setAttribute('class', 'head_v_opac');
		// header_mass_views.setAttribute('class', 'header_massage_views_opac')
		// console.log('3')
	}, 400);
	setTimeout(()=>{
		close_but.setAttribute('class', 'head_close_opac');
		header_mass_views.setAttribute('class', 'hidden_views');
		header.setAttribute('class', 'header header_no_blur');
		cover_curtain_hide();
	}, 600);
}

function head_mass_show_2(){
	 const views_list = document.querySelectorAll('#view_list_el')
	 console.log(views_list)
	 for(let i = 0; i < views_list.length; i++){
	   views_list[i].setAttribute('class','view_list_el')
	 }
  // view_list_el.setAttribute('class', 'view_list_el')
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
		 header.setAttribute('class', 'header header_blur_ss');
	  close_but.setAttribute('class', 'head_close_ss');
	  cover_curtain();
   view_1.setAttribute('class', 'head_view_ss')
		 view_2.setAttribute('class', 'head_view_ss');
	 	header_mass_views.setAttribute('class', 'header_massage_views_ss');
   view_3.setAttribute('class', 'head_view_ss');
  }
  else {

	  close_but.setAttribute('class', 'hidden');
   view_1.setAttribute('class', 'hidden')
		 view_2.setAttribute('class', 'hidden');
	 	header_mass_views.setAttribute('class', 'hidden');
   view_3.setAttribute('class', 'hidden');
  }
}

cond_views()


 
