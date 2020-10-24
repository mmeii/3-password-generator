// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// arrays for different criteria options
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.toUpperCase();
var wantNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  // prompt user for password length - need to be 8 to 128 characters
  var passLength = prompt("How many characters do you want your password to be?") {
    if (passLength >= 8 || passLength <=128) {
      function
      // prompt user for lowercase characters
      var lowerCase = confirm("Do you want to include a lowercase letter?");

      // prompt user for uppercase characters
      var upperCase = confirm("Do you want to include a uppercase letter?");

      // prompt user for uppercase characters
      var upperCase = confirm("Do you want to include a uppercase letter?");

      // prompt user for special characters
      var specialChar = confirm("Do you want to include a special character?");

      // if no for all, alert that must select one type

      // start random selection for password

      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    } else {
      alert("Password length must between 8 to 128");
    }
  }
}



