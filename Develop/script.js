
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const passwordlength = prompt("How long would you like the password to be?");
  if (isNaN(passwordlength))
  {
    alert("Must input a number.");
    return false;
  }
  if (passwordlength <8 || passwordlength >128) {
    alert("Number must be between 8 and 128")
    return false;
  }
  console.log(passwordlength);
  const lowercase = confirm("Would you like lowercase letters in your password?");
  console.log(lowercase);
  const uppercase = confirm("Would you like uppercase letters in your password?");
  console.log(uppercase);
  const numbers = confirm("Would you like numbers in your password?");
  console.log(numbers);
  const special = confirm("Would you like special characters in your password?");
  console.log(special);
}


const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSpecial
};


function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(randomLower());

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUpper());

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(randomNumber());

function randomSpecial() {
  const symbols = "!@#$%^&*(){}[]=/,."
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(randomSpecial());




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// var passwordlength = function() {
//  var promptlengthquestion = window.prompt('How long would you like the password to be?');
//  if (promptlengthquestion === "" || promptlengthquestion === null) {
//    window.alert("Please enter a number.");
//    return passwordlength();
//  }
// }


// var passwordlength = 0;
// passwordlength = prompt("how long would you like the password to be?");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
