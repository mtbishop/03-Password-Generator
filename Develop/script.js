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
  for (var passwordLength = 0; index < lowercase.length; index++) {
    const element = array[index];
    
  }
}

}


// Add event listener to generate button1
generateBtn.addEventListener("click", writePassword); 



var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "*;<>()[]{}#$?!^|";
