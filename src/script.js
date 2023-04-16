function passwordValidator() {

// assign values to password requirements
let input = document.getElementById("input").value;
let meetsLength = false;
let hasLowerCase = false;
let hasUpperCase = false;
let hasNumber = false;
let hasSpecialChar = false;

// Validate length
if(input.length >= 8) {
    meetsLength=true
} else {
    alert("Password does not meet length requirements")
}

// Validate lowercase letters
let lowerCaseLetters = /[a-z]/g;
if(input.match(lowerCaseLetters)) {
    hasLowerCase=true
} else {
    alert("Password does not meet lower case requirements")
}

// Validate capital letters
let upperCaseLetters = /[A-Z]/g;
if(input.match(upperCaseLetters)) {
   hasUpperCase=true
} else {
    alert("Password does not meet upper case requirements")
}

// Validate numbers
let numbers = /[0-9]/g;
if(input.match(numbers)) {
    hasNumber=true
} else {
    alert("Password does not meet number requirements")
}

  // Validate characters
let characters = /[!, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, ^, _, '. ~]/;
if(input.match(characters)) {
    hasSpecialChar=true
} else {
    alert("Password does not meet special character requirements")
}

if(meetsLength&&hasLowerCase&&hasUpperCase&&hasNumber&&hasSpecialChar) {
    alert("Password meets requirements")
}
}