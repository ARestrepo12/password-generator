// const randomFunc = {
//   lower: randomLower,
//   upper: randomUpper,
//   number: randomNumber,
//   special: randomSpecial
// };


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const passwordlength = prompt("How long would you like the password to be?");
  // if input is not a number
  if (isNaN(passwordlength))
  {
    alert("Must input a number.");
    return false;
  }
  // if input is not within number range
  if (passwordlength <8 || passwordlength >128) {
    alert("Number must be between 8 and 128")
    return false;
  }
  console.log(passwordlength);
  //prompt parameter questions
  const lowercase = confirm("Would you like lowercase letters in your password?");
  console.log(lowercase);
  const uppercase = confirm("Would you like uppercase letters in your password?");
  console.log(uppercase);
  const numbers = confirm("Would you like numbers in your password?");
  console.log(numbers);
  const special = confirm("Would you like special characters in your password?");
  console.log(special);


  let functionArr= []
  if(lowercase) {functionArr.push(randomLower)}
  console.log(functionArr);
  if(uppercase) {functionArr.push(randomUpper)}
  console.log(functionArr);
  if(numbers) {functionArr.push(randomNumber)}
  console.log(functionArr);
  if(special) {functionArr.push(randomSpecial)}
  console.log(functionArr);

  let password = ""

  for(let i = 0; i < passwordlength; i++) {
    password += functionArr[Math.floor(Math.random() * functionArr.length)]()
    console.log(password);
  }
  return password;
}


//all random lowercase letters
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(randomLower());

//all random uppercase letters
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUpper());

//all random numbers
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(randomNumber());

//all random special characters
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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// for(let i = 0; i < passwordlength; i += typesCount) {
  //   typesArr.forEach(type => {
  //     const funcName = Object.keys(type)[0];
  //     console.log("funcName:", funcName);

  //     password += randomFunc[funcName]();
  //   });
  // }