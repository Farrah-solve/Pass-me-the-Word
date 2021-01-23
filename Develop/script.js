// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function randomLower(){
  const lower = "abcdefghijklmnopqrstuvwxyz"
   return lower[Math.floor(Math.random() * lower.length)];
}

function randomUpper(){
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   return upper[Math.floor(Math.random() * upper.length)];
}

function randomNum(){
  const num = "0123456789"
   return num[Math.floor(Math.random() * num.length)];
}

function randomSymbol(){
  const symbol = "!@#$%^&*()_+"
   return symbol[Math.floor(Math.random() * symbol.length)];
}




function generatePassword(){

}