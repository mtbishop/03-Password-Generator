var generateBtn = document.querySelector('#generate');
var allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|.`:;<'>?";
var passwordLength = '';

function generatePassword(randomPassword) {
  var results = '';
  randomPassword, passwordLength;
  for (var index = 0; index < randomPassword; index++) {
    results += passwordLength.charAt(
      Math.floor(Math.random() * passwordLength.length)
    );

    console.log(results);
  }
  return results;
}

function writePassword() {
  passwordLength = '';
  var input = parseInt(
    prompt(
      'How long would you like your password to be? (>8 or <128 characters)'
    )
  );
  if (userInput >= 8 && userInput <= 128) {
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
  } else if (userInput === null) {
    alert('Please enter a password length');
    return;
  } else if (userInput < 8 || userInput > 128) {
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
  if (lowerCase === true) {
    passwordLength += allCharacters.substring(0, 26);
  }
  if (upperCase === true) {
    passwordLength += allCharacters.substring(26, 52);
  }
  if (numberCase === true) {
    passwordLength += allCharacters.substring(52, 62);
  }
  if (specialCase === true) {
    passwordLength += allCharacters.substring(62);
  }
  var password = generatePassword(userInput);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
