// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays for different criteria options

// Write password to the #password input
function writePassword() {
  // prompt user for password length - need to be 8 to 128 characters
  var passLength = prompt("How many characters do you want your password to be?")

  // prompt user for lowercase characters
  var lowerCase = confirm("Do you want to include a lowercase letter?")

  // prompt user for uppercase characters
  var upperCase = confirm("Do you want to include a uppercase letter?")

  // prompt user for special characters
  var specialChar = confirm("Do you want to include a special character?")

  // if no for all, alert that must select one type

  // start random selection for password

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

