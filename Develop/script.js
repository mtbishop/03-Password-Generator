// Assignment Code
var generateBtn = document.querySelector('#generate');
var allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|.`:;<'>?";
var passwordLength = '';

// Writes password to the #password input
function generatePassword(randomPassword) {
  var results = '';
  randomPassword, passwordLength;
  for (var index = 0; index < randomPassword; index++) {
    results += passwordLength.charAt(
      Math.floor(Math.random() * passwordLength.length)
    );
  }
  console.log(results);
  return results;
}

function writePassword() {
  passwordLength = "";
  var passwordLength = parseInt(
    prompt(
      'How long would you like your password to be? (>8 or <128 characters)'
    )
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCase = confirm(
      'Do you want your password to contain lower case characters?'
    );
    var upperCase = confirm(
      'Do you want your password to contain upper case characters?'
    );
    var numberCase = confirm('Do you want your passowrd to contain numbers?');
    var specialCase = confirm(
      'Do you want your password to contain special characters?'
    );
  } else if (passwordLength === null) {
    alert('Please enter a password length');
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert('Please pick a number between 8 and 128');
    return;
  }
  if (
    lowerCase === false &&
    upperCase === false &&
    numberCase === false &&
    specialCase === false
  ) {
    alert('Please select at least one option');
    return;
  }
  if (lowerCase) {
    passwordLength += allCharacters.substring(0, 26);
  }
  if (upperCase) {
    passwordLength += allCharacters.substring(26, 52);
  }
  if (numberCase) {
    passwordLength += allCharacters.substring(52, 62);
  }
  if (specialCase) {
    passwordLength += allCharacters.substring(62);
  }
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  console.log(passwordLength);
}

// Add event listener to generate button1
generateBtn.addEventListener('click', writePassword);
