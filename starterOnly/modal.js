// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closer = document.querySelector('.close');

// select form's elements (input)
let contactForm = document.querySelector('#contactForm');
// let first = document.querySelector('#first');
// let last = document.querySelector('#last');
// let email = document.querySelector('#email');
// let birthdate = document.querySelector('#birthdate');
// let quantity = document.querySelector('#quatity');

// set locations
let location1 = document.querySelector('#location1');
let location2 = document.querySelector('#location2');
let location3 = document.querySelector('#location3');
let location4 = document.querySelector('#location4');
let location5 = document.querySelector('#location5');
let location6 = document.querySelector('#location6');

// Checkbox
let Checkbox1 = document.querySelector('#checkbox1');
let checkbox2 = document.querySelector('#checkbox2');

let validate = document.querySelector('.button');

// create  a div for error message




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// check monitor first
contactForm.email.addEventListener('change', function(){
  validInput(this)});

// close modal form
closer.addEventListener('click', closeModal);

// set navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// set close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// monitor first
const validInput = function (inputValue) {

  let regex = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

  let testRegex = regex.test(inputValue.value);
  let small = inputValue.nextSibling;
console.log(small);
  // if (testRegex){
  //   small.innerHTML = 'test';
  // }else{
  //   alert('off');
  // }

}