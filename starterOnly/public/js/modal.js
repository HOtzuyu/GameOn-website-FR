/*********************************************************************************/
/*****************************Variables******************************************/
/*********************************************************************************/
// =====================! DOM Elements !=====================
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closer = document.querySelector('.close'); // link close "x" button
let contactForm = document.querySelector('#contactForm');
let inputs = document.querySelectorAll("input");
let Checkbox1 = document.querySelector('#checkbox1');
let submit = document.querySelector('.button');
let locationChecking = document.querySelectorAll('input[name="location"]');
let modalSuccess_btn = document.querySelector('#modalSuccess_btn');
// =====================! Creat variables !=====================
// || list of regExp for first, last, mail, birthdate and quantity ||
let listRegex = [
  "^[a-zA-Z]{2,}", //0
  "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", //1
  "^[0-9]{4}-[0-9]{2}-[0-9]{2}$", //2
  "^[0-9]{1,2}$", //3
];
// || list of error messages for first, last, mail, birthdate and quantity ||
let listError = [
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.", //0
  "Veuillez entrer 2 caractères ou plus pour le champ du prènom.", //1
  "Veuillez entrer un adresse mail valide.", //2
  "Veuillez entrer votre date de naissance.", //3
  "Vous devez choisir une valeur numérique compris entre 0 et 99.", //4
  "Vous êtes trop jeune pour vous inscrire !", //5
  "Les dinosaures ne sont pas accepté.", //6
  "<br>Les conditions d'utilisation doivent être accepté pour valider le formulaire", //7
  "<br>Vous devez choisir une ville", //8
  "Vous devez remplir les champs requis pour valider le formulaire." //9
];
// || initialize isValid for compare the booleans ||
// if inputs are properly complete, turn true in each function
let isValid = false;
// || initialize all verifications inputs in form ||
// Check if all input are completes if isValid = true
let Check = {
  first: false,
  last: false,
  mail: false,
  quantity: false,
  location: false,
  box: true
}
/**********************************************************************************/
/******************************Events*********************************************/
/*********************************************************************************/
// || launch modal event ||
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// || close modal form with X ||
closer.addEventListener('click', closeModal);
// || check all event with regex (first, last, mail, birthdate, qty of tornament) ||
contactForm.first.addEventListener('input', function () {
  testError(this, listRegex[0], listError[0]); // Each testError return isValid value
  if (isValid) {
    Check.first = true; // if isValide = true, attribute for the object Check.key = true
  };
  isValid = false; // re-initialize isValid value
  return Check.first; // return the new value of Check.key
});
contactForm.last.addEventListener('input', function () {
  testError(this, listRegex[0], listError[1]);
  if (isValid) {
    Check.last = true;
  };
  isValid = false;
  return Check.last;
});
contactForm.email.addEventListener('input', function () {
  testError(this, listRegex[1], listError[2]);
  if (isValid) {
    Check.mail = true;
  };
  isValid = false;
  return Check.mail;
});
contactForm.birthdate.addEventListener('input', function () {
  testError(this, listRegex[2], listError[3]);
  validDate(this);
  if (isValid) {
    Check.birthdate = true;
  };
  isValid = false;
  return Check.birthdate;
});
contactForm.quantity.addEventListener('input', function () {
  testError(this, listRegex[3], listError[4]);
  if (isValid) {
    Check.quantity = true;
  };
  isValid = false;
  return Check.quantity;
});
// || check if required box is checked ||
Checkbox1.addEventListener('input', function () {
  checkboxChecker(this); // if check box is checked
  if (isValid) {
    Check.box = true;
  };
  isValid = false;
  return Check.box;
});
// || Validate the Form and block the default setup of the form ||
contactForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  validate();
});
// || close thanks message ans reset all input on the form ||
modalSuccess_btn.addEventListener('click', function () {
  clearForm();
})

/**********************************************************************************/
/*********************************Functions***************************************/
/*********************************************************************************/
// || set navbar ||
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// || launch modal form ||
function launchModal() {
  modalbg.style.display = "flex";
  document.querySelector(".hero-section").style.display = "none"; // hide hero-section
  document.querySelector('footer').style.display="none";
}
// || set close modal form ||
function closeModal() {
  modalbg.style.display = "none";
  document.querySelector(".hero-section").style.display = "grid"; // reveal hero-section
  document.querySelector('footer').style.display="block";
}
// || testError with regex (first, last, mail, birthdate, qty of tornament) ||
function testError(id, regex, errorMessage) {
  let regExp = new RegExp(regex, 'g');
  let testRegex = regExp.test(id.value); // test if the input.value correspond to the regex expression
  let small = id.nextElementSibling; // small in HTML for write the message next to the input
  isValid = false; // init isValid
  if (testRegex) {
    small.innerHTML = '';
    id.parentElement.setAttribute('data-error-visible', 'false');
    isValid = true;
  } else {
    small.innerHTML = errorMessage;
    id.parentElement.setAttribute('data-error-visible', 'true');
  }
  return isValid;
}
// || monitor Birthdate ||
function validDate(inputValue) {
  let dateActual = new Date(); // actual date
  let dateForm = new Date(inputValue.value); // input date
  let year = dateForm.getFullYear(); // take the year
  let month = dateForm.getMonth(); // take the month
  let day = dateForm.getDay(); // take the day
  let small = inputValue.nextElementSibling; // small in HTML for write the message next to the input
  let now = parseInt(dateActual.toISOString().slice(0, 10).replace(/-/g, '')); // analyse dateActual and convert to a number multiple to 0 to 10
  let dob = year * 10000 + month * 100 + day * 1; // convert date to a number
  isValid = false;
  // compare if the substraction of the actual date converting to number and the input date convert to number is comprised between 18 years old and 100 years old
  if (now - dob < 180000) {
    small.innerHTML = listError[5];
    inputValue.parentElement.setAttribute('data-error-visible', 'true');
  } else if (now - dob > 1000000) {
    small.innerHTML = listError[6];
    inputValue.parentElement.setAttribute('data-error-visible', 'true');
  } else {
    small.innerHTML = '';
    inputValue.parentElement.setAttribute('data-error-visible', 'false');
    isValid = true;
  }
  return isValid;
}
// || Check if the checkbox require is checked ||
function checkboxChecker(btn) {
  isValid = false;
  if (btn.checked) {
    document.querySelector('#error-check').innerHTML = "";
    document.querySelector('#error-check').parentElement.setAttribute('data-error-visible', 'false');
    isValid = true;

  } else {
    document.querySelector('#error-check').innerHTML =
      listError[7];
    document.querySelector('#error-check').parentElement.setAttribute('data-error-visible', 'true');
  }
  return isValid;
};
// || Check if the location is checked ||
function locationChecker(location) {
  for (let loc of location) {
    if (loc.checked) {
      Check.location = true;
      document.querySelector('#error-location').innerHTML = "";
      document.querySelector('#error-location').parentElement.setAttribute('data-error-visible', 'false');
      break;
    } else {
      document.querySelector('#error-location').innerHTML =
        listError[8];
      document.querySelector('#error-location').parentElement.setAttribute('data-error-visible', 'true');
    }
  }
  return Check.location;
}
// || validate the form is correctly complete ||
function validate() {
  // launch all function for checking if the inputs are correctly completed
  testError(contactForm.first, listRegex[0], listError[0]);
  testError(contactForm.last, listRegex[0], listError[1]);
  testError(contactForm.email, listRegex[1], listError[2]);
  testError(contactForm.birthdate, listRegex[2], listError[3]);
  testError(contactForm.quantity, listRegex[3], listError[4]);
  locationChecker(locationChecking);
  checkboxChecker(Checkbox1);
  // if all key of Check are True 
  if (Check.first && Check.last && Check.mail && Check.birthdate && Check.location) {
    document.querySelector('#error-form').innerHTML = "";
    success();
    // else block the form validate and shox the message
  } else {
    document.querySelector('#error-form').innerHTML = listError[9];
  }
}
// || if validate is active, show the thanks message and hide the form ||
function success() {
  let modalSuccess = document.querySelector("#modalSuccess");
  modalSuccess.style.display = "block";
  contactForm.style.display = "none";
}
// || Clear all input of the form when we confirme the thank message ||
function clearForm() {
  contactForm.reset();
  // reset all checking variables
  Check.first = false;
  Check.last = false;
  Check.mail = false;
  Check.quantity = false;
  Check.location = false;
  Check.box = true;
  closeModal();
}