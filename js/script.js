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

// window.addEventListener('scroll', function() {
//   let scroll_px = document.documentElement.scrollTop;
//   let scroll_height = document.documentElement.scrollHeight;
//   let scroll_procent = Math.floor((scroll_px / scroll_height) * 100);
//   let scroll_proc = document.getElementById('scroll_proc');
//   console.log(`скрол рх: ${scroll_procent} скролл высота: ${scroll_height}`)
//   console.log(`итоговый процент: ${scroll_procent}`)
//   if (scroll_procent > 30){
//   	button_up.setAttribute('class', 'button_up');
//   } else if (scroll_procent < 30 && button_up.className === 'button_up') {
//   	button_up.setAttribute('class', 'button_up_hide');
//   	setTimeout(()=>{
//   	  button_up.setAttribute('class', 'hidden');	
//   	}, 400);	
//   } 

//   if (scroll_procent >= 31) {
//     button_right.setAttribute('class', 'button_right');
//     button_left.setAttribute('class', 'button_left');
//   }  else if (scroll_procent < 22 && button_right.className === 'button_right' && button_left.className === 'button_left') {
//     button_right.setAttribute('class', 'button_right_hide');
//     button_left.setAttribute('class', 'button_left_hide');
//   	setTimeout(()=>{
//   	  button_right.setAttribute('class', 'hidden');
//   	  button_left.setAttribute('class', 'hidden');	
//   	}, 400);
//   }
// });



// function scroll_up() {
// 	header.scrollIntoView({behavior: "smooth"});
// }


// function right_click(){
// 	if(massage_view_2.className === 'hidden' && massage_view_3.className === 'hidden') {
//     massage_view_1.setAttribute('class', 'massage_view_hide_r');
// 	  setTimeout(()=>{
// 		  massage_view_1.setAttribute('class', 'hidden');
// 		  massage_view_2.setAttribute('class', 'massage_view_2_r');
// 	  }, 200);
//   } else if (massage_view_1.className === 'hidden' && massage_view_3.className === 'hidden') {
//   	massage_view_2.setAttribute('class', 'massage_view_hide_r');
// 	  setTimeout(()=>{
// 		  massage_view_2.setAttribute('class', 'hidden');
// 		  massage_view_3.setAttribute('class', 'massage_view_3_r');
// 	  }, 200);
//   } else if (massage_view_1.className === 'hidden' && massage_view_2.className === 'hidden') {
//     massage_view_3.setAttribute('class', 'massage_view_hide_r');
// 	  setTimeout(()=>{
// 		  massage_view_3.setAttribute('class', 'hidden');
// 		  massage_view_1.setAttribute('class', 'massage_view_1_r');
// 	  }, 200);
//   }
// }


// function left_click(){
//   if( massage_view_2.className === 'hidden' && massage_view_3.className === 'hidden') {
//     massage_view_1.setAttribute('class', 'massage_view_hide_l');
// 	  setTimeout(()=>{
// 		  massage_view_1.setAttribute('class', 'hidden');
// 		  massage_view_3.setAttribute('class', 'massage_view_3_l');
// 	  }, 200);
//   } else if (massage_view_1.className === 'hidden' && massage_view_2.className === 'hidden') {
//   	massage_view_3.setAttribute('class', 'massage_view_hide_l');
// 	  setTimeout(()=>{
// 		  massage_view_3.setAttribute('class', 'hidden');
// 		  massage_view_2.setAttribute('class', 'massage_view_2_l');
// 	  }, 200);
//   } else if (massage_view_3.className === 'hidden' && massage_view_1.className === 'hidden') {
//   	massage_view_2.setAttribute('class', 'massage_view_hide_l');
// 	  setTimeout(()=>{
// 		  massage_view_2.setAttribute('class', 'hidden');
// 		  massage_view_1.setAttribute('class', 'massage_view_1_l');
// 	  }, 200);
//   }
// }

 
function head_mass_show() {
	cookie_on()
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
	cookie_off()
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
		// console.log('4');
	}, 600);
}

// function scroll_to_view(event) {
//   let click_event = event.target;
//   switch (click_event.textContent){
//     case "обо мне":
//       massage_sect.scrollIntoView({behavior: "smooth"}); 
//       break;   
//   }
// }

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

function cookie_on(){
	// document.cookie
	document.cookie = 'да'
  console.log(`кука он: ${document.cookie}`)
}

function cookie_off(){
	// document.cookie
	document.cookie = 'нет'
	console.log(`кука офф: ${document.cookie}`)
}

console.log(`показано ли меню?: ${document.cookie}`)

if(document.cookie === "да") head_mass_show()
else close_views()

// const cordX = [];
// const cordY = [];

// massage_sect.addEventListener('touchstart', touchSt);
// massage_sect.addEventListener('touchend', touchOf);

// function touchSt(event) {
// 	cordX[0] = event.changedTouches[0].clientX;
// 	cordY[0] = event.changedTouches[0].clientY;
// } 


// function touchOf(event) {
// 	cordY[1] = event.changedTouches[0].clientY;
//   cordX[1] = event.changedTouches[0].clientX;

//   let st = cordX[0];
//   let end = cordX[1];
//   let stY = cordY[0];
//   let endY = cordY[1];
//   let y = stY - endY;
//   if (st > end && st - end > 300 && y > -100 && y < 100) {
//   	right_click();
//   	console.log(`вправо ${y}`);
//   } else if (st < end && end - st > 300 && y > -100 && y < 100) {
//   	left_click();
//   	console.log(`влево ${y}`);
//   } else {
//   	console.log(`вниз ${y}`);
//   }
// }
 

