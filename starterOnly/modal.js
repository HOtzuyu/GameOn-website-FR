// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closer = document.querySelector('.close'); // link close "x" button

// select form's elements (input)
let contactForm = document.querySelector('#contactForm');


// set locations
let radioLocation = document.querySelectorAll('input[name="location"]');

// Checkbox
let Checkbox1 = document.querySelector('#checkbox1');
let checkbox2 = document.querySelector('#checkbox2');
let validate = document.querySelector('.button');

let listError = ['Veuillez entrer 2 caractères ou plus pour le champ du nom.', 'Veuillez entrer 2 caractères ou plus pour le champ du prènom.', 'Veuillez entrer un adresse mail valide.', 'Vous devez choisir une valeur numérique compris entre 0 et 99.'];
let listRegex = ['^[a-zA-Z]{2,}','^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','^[0-9]{1,2}$'];



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// #1 close modal form
closer.addEventListener('click', closeModal);


// #2.1check monitor first _ listen when the value is input
contactForm.first.addEventListener('input', function () {
  validFirst(this);
  if (validFirst(this) != 0) {
    contactForm.first.target.parentElement('data-error-visible', 'true');
  }
});
// #2.2check monitor last _ listen when the value is input
contactForm.last.addEventListener('input', function () {
  validLast(this)
});
// #2.3check monitor email _ listen when the value is input
contactForm.email.addEventListener('input', function () {
  validMail(this)
});
// #2.4check birthdate
contactForm.birthdate.addEventListener('input', function () {
  validDate(this)
})
// #2.5check Quantity of tornament
contactForm.quantity.addEventListener('input', function () {
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
  modalbg.style.display = "flex";
}

// #1 set close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// #2.1 monitor First
const validFirst = function (inputValue) {

  let regex = new RegExp(listRegex[0], 'g');

  let testRegex = regex.test(inputValue.value);
  let small = inputValue.nextElementSibling;

  if (testRegex) {
    small.innerHTML = '';

  } else {
    small.innerHTML = listError[0];
    inputValue.parentElement.setAttribute('data-error-visible', 'true');
  }
  return testRegex;
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
    contactForm.last.parentElement.setAttribute('data-error-visible', 'true');
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

  };
  return //a check;
}
// #2.5check Quantity of tornament
const validQuantity = function (inputValue) {
  let small = inputValue.nextElementSibling;

  let regex = new RegExp('^[0-9]{1,2}$', 'g');
  let testRegex = regex.test(inputValue.value);

  if (testRegex) {
    small.innerHTML = '';
  } else {
    small.innerHTML = 'Vous devez choisir une valeur numérique compris entre 0 et 99.';
  }
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