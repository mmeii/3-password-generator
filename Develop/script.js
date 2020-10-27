// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays for different criteria options
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "D", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wantNumArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharArray = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// declare variables for user criteria selection
var passLength;
var lowerCase;
var upperCase;
var wantNum;
var specialChar;

// function for user criteria password option selections
function passwordOption() {

  // prompt user for password length - need to be 8 to 128 characters
  passLength = prompt("How many characters do you want your password to be?");
    if (passLength >= 8 && passLength <= 128) {

      // password parameters, user confirmation what to choose for criteria selection
      lowerCase = confirm("Do you want to include a lowercase letter?");
      upperCase = confirm("Do you want to include a uppercase letter?");
      wantNum = confirm("Do you want to include a number?");
      specialChar = confirm("Do you want to include a special character?");

      // // console log user criteria selection choices
      // console.log("lowerCase: " + lowerCase + " upperCase: " + upperCase + " wantNum: " + wantNum + " specialChar: " + specialChar);

      if (lowerCase || upperCase || wantNum || specialChar) {
        generatePassword();
      } else {
        alert("Please select at least one criteria to generate password!");
      }
      // start random selection for password

      // if no for all, alert that must select one type
    } else {
      alert("Password length must be between 8 to 128!");
    }
}

// function to generate password after user criterias have been selected
function generatePassword() {
  var password = "";
  var passwordsArray = [];

  if (lowerCase == true) {
    password += lowerCaseArray[getRandomInt(lowerCaseArray.length)];
    passwordsArray = passwordsArray.concat(lowerCaseArray);
  }

  if (upperCase == true) {
    password += upperCaseArray[getRandomInt(upperCaseArray.length)];
    passwordsArray = passwordsArray.concat(upperCaseArray);
  }

  if (wantNum == true) {
    password += wantNumArray[getRandomInt(wantNumArray.length)];
    passwordsArray = passwordsArray.concat(wantNumArray);
  }

  if (specialChar == true) {
    password += specialCharArray[getRandomInt(specialCharArray.length)];
    passwordsArray = passwordsArray.concat(specialCharArray);
  }

  var currentLength = password.length;
  var i;

  console.log(password);
  console.log(passwordsArray);

  for (i = currentLength; i < passLength; i++) {
    password += passwordsArray[getRandomInt(passwordsArray.length)];
  }

  // Write password to the #password input
  var textarea = document.getElementById('password');
  textarea.value = password;
}

// function to generate random index from the arrays
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// function to run everything when generate password button is clicked
function writePassword() {
  passwordOption();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
