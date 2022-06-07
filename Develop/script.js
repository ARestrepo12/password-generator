
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordlength = prompt("How long would you like the password to be?");
  console.log(passwordlength);
  const lowercase = confirm("Would you like Lowercase letters in your password?");
  console.log(lowercase);
  const lowercase = confirm("Would you like Lowercase letters in your password?");
  console.log(lowercase);
  const lowercase = confirm("Would you like Lowercase letters in your password?");
  console.log(lowercase);
  const lowercase = confirm("Would you like Lowercase letters in your password?");
  console.log(lowercase);
  

}

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
