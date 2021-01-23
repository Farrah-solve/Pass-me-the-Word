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

function generatePassword(){
  var howLong = prompt("How long would you like your password? (Choose a number between 8 and 128)");

  if((howLong > 0) && (howlong < 129)){
    var passLength = parseInt(howlong);
    var lowerPrompt = prompt("Do you want to use lowercase letters?");
    var upperPrompt = prompt("Do you want to use uppercase letters?");
    var numPrompt = prompt("Do you want to use numbers?");
    var symbolPrompt = prompt("Do you want to use special characters?");
    var passwordString = "";
    var finalPassword = "";
    
    for(let i = 0; i < passLength; i++ ){
      if(lowerPrompt){
        randomLower();
        passwordString += randomLower();
      }
      if(upperPrompt){
        randomUpper();
        passwordString += randomUpper();
      }
      if(numPrompt){
        randomNum();
        passwordString += randomNum();
      }
      if(symbolPrompt){
        randomSymbol();
        passwordString += randomSymbol();
      }
  }

finalPassword += passwordString.substr(0, passLength);

function randomLower(){
  const lower = "abcdefghijklmnopqrstuvwxyz"
   return String.lower[Math.floor(Math.random() * lower.length)];
}

function randomUpper(){
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   return String.upper[Math.floor(Math.random() * upper.length)];
}

function randomNum(){
  const num = "0123456789"
   return String.num[Math.floor(Math.random() * num.length)];
}
// I purposely limited special characters to those also found in primary mobile text boxes that would also not interfere with the way the code would be interpreted.
function randomSymbol(){
  const symbol = "-/:;()$&@?!."
   return String.symbol[Math.floor(Math.random() * symbol.length)];
}



}else{
  alert(howLong + " is not a valid number, try again.");
}

return finalPassword;
}