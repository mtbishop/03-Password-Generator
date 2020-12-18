// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? (>8 or <128 characters)");
 // 
  if (passwordLength > 8 && passwordLength < 128) {
    var lowerCase = confirm("Do you want your password to contain lower case characters?");
    var upperCase = confirm("Do you want your password to contain upper case characters?");
    var numberCase = confirm("Do you want your passowrd to contain numbers?");
    var specialCase = confirm("Do you want your password to contain special characters?");
  
  } else if (passwordLength === null) {
    alert("Please enter a password length");
    return;
    
  }

else if (passwordLength < 8 || passwordLength > 128) {
  alert("Please pick a number between 8 and 128");
  return;
 }
if (lowerCase === false && upperCase === false && numberCase === false && specialCase === false) {
  alert("Please select at least one option");
  return;
}

if (lowerCase === true) {
  for (var passwordLength = 0; passwordLength < lowercase.length; index++) {
    result += lowercase.charAt(Math.floor(math.random() * lowercaseLength));
    
  }
}
if (upperCase === true) {
  for (var passwordLength = 0; passwordLength < uppercase.length; index++) {
    result += uppercase.charAt(Math.floor(math.random() * uppercaseLength));

}
}
if (numberCase === true) {
  for (var passwordLength = 0; passwordLength < number.length; index++) {
    result += number.charAt(Math.floor(math.random() * numberLength));

}
}
if (specialCase === true) {
  for (var passwordLength = 0; passwordLength < special.length; index++) {
    result += special.charAt(Math.floor(math.random() * specialLength));

}
}
}


// Add event listener to generate button1
generateBtn.addEventListener("click", writePassword); 



var lowercase = "abcdefghijklmnopqrstuvwxyz"
var lowercaseLength = lowercase.length;
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseLength = uppercase.length;
var number = "0123456789";
var numberLength = number.length;
var special = "*;<>()[]{}#$?!^|";
var specialLength = symbol.length;
var result = "";
