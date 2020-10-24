// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays for different criteria options
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "D", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wantNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function passwordOption() {

  // prompt user for password length - need to be 8 to 128 characters
  var passLength = prompt("How many characters do you want your password to be?");
    if (passLength >= 8 && passLength <= 128) {

      // password parameters, user confirmation what to choose
      var lowerCase = confirm("Do you want to include a lowercase letter?");
      var upperCase = confirm("Do you want to include a uppercase letter?");
      var wantNum = confirm("Do you want to include a number?");
      var specialChar = confirm("Do you want to include a special character?");      
      if (lowerCase || upperCase || wantNum || specialChar) {
        generatePassword(); 
      } else {
        alert("Please select at least one criteria to generate password!");
      }
      // start random selection for password

      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;

      // if no for all, alert that must select one type
      } else {
      alert("Password length must between 8 to 128");
    }
} 

function generatePassword() {
  
}


// Write password to the #password input

function writePassword() {
  var password = passwordOption();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



