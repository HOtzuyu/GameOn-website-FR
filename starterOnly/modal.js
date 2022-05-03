// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closer = document.querySelector('.close'); // link close "x" button

// select form's elements (input)
let contactForm = document.querySelector('#contactForm');


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

// #1 close modal form
closer.addEventListener('click', closeModal);


// #2.1check monitor first _ listen when the value is change
contactForm.first.addEventListener('change', function () {
  validFirst(this)
});
// #2.2check monitor last _ listen when the value is change
contactForm.last.addEventListener('change', function () {
  validLast(this)
});
// #2.3check monitor email _ listen when the value is change
contactForm.email.addEventListener('change', function () {
  validMail(this)
});
// #2.4check birthdate
contactForm.birthdate.addEventListener('input', function () {
  validDate(this)
})
// #2.5check Quantity of tornament
contactForm.quantity.addEventListener('change', function(){
  validQuantity(this)
})



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

// #1 set close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// #2.1 monitor First
const validFirst = function (inputValue) {

  let regex = new RegExp('^[a-zA-Z]{2,}', 'g');

  let testRegex = regex.test(inputValue.value);
  let small = inputValue.nextElementSibling;
 
  if (testRegex) {
    small.innerHTML = '';
  } else {
    small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
  }
}
// #2.2 monitor Last
const validLast = function (inputValue) {

  let regex = new RegExp('^[a-zA-Z]{2,}', 'g');

  let testRegex = regex.test(inputValue.value);
  let small = inputValue.nextElementSibling;
  if (testRegex) {
    small.innerHTML = '';
  } else {
    small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prènom.';
  }
}
// #2.3 monitor email
const validMail = function (inputValue) {
  // Set RegExp for email
  let regex = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

  let testRegex = regex.test(inputValue.value);
  let small = inputValue.nextElementSibling;

  if (testRegex) {
    small.innerHTML = '';
  } else {
    small.innerHTML = 'Veuillez entrer un adresse mail valide.';
  }

}
// #2.4 monitor Birthdate
const validDate = function (inputValue) {

  let dateActual = new Date();
  let dateForm = new Date(contactForm.birthdate.value);
  let year = dateForm.getFullYear();
  let month = dateForm.getMonth();
  let day = dateForm.getDay();
  let small = inputValue.nextElementSibling;
  let now = parseInt(dateActual.toISOString().slice(0, 10).replace(/-/g, ''));
  let dob = year * 10000 + month * 100 + day * 1;



  if (now - dob < 180000) {
    small.innerHTML = 'Vous êtes trop jeune pour vous inscrire !';
  } else if (now - dob > 1000000) {
    small.innerHTML = 'Les dinosaures ne sont pas accepté.'
  } else {
    small.innerHTML = '';
    return true
  };

}
// #2.5check Quantity of tornament
const validQuantity = function (inputValue) {
  let small = inputValue.nextElementSibling;
  
  
}


// Put in click btn check the empty date

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function handleClick() {
//   const dateInput = document.getElementById('date');

//   if (!dateInput.value) {
//     console.log('Input type date is empty');
//   } else {
//     console.log('Input type date is NOT empty');
//     console.log(dateInput.value);
//   }
// });