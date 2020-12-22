var generateBtn = document.querySelector('#generate');
// String of characters that is randomized
var allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|.`:;<'>?";
var passwordLength = '';

// for loop that randomizes the size of what the user chose
function generatePassword(randomPassword) {
  var results = '';
  randomPassword, passwordLength;
  for (var index = 0; index < randomPassword; index++) {
    results += passwordLength.charAt(
      Math.floor(Math.random() * passwordLength.length)
    );
  }
  return results;
}
// main function that pushes the prompts to the user
function writePassword() {
  passwordLength = '';
  var userInput = parseInt(
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
    var numberCase = confirm('Do you want your password to contain numbers?');
    var specialCase = confirm(
      'Do you want your password to contain special characters?'
    );
    // if the user selects cancel/no to the first prompt that's asking to enter a password length
  } else if (userInput === null) {
    return;
    // if the user chooses a character outside of the specified range
  } else if (userInput < 8 || userInput > 128) {
    alert('Please pick a number between 8 and 128');
    return;
  } 
  //if they choose "Confirm" for lower case letters to be in their password
  if (lowerCase) {
    passwordLength += allCharacters.substring(0, 26);
  }
  //if they choose "Confirm" for upper case letter to be in their password
  if (upperCase) {
    passwordLength += allCharacters.substring(26, 52);
  }
  //if they choose "Confirm" for numbers to be in their password
  if (numberCase) {
    passwordLength += allCharacters.substring(52, 62);
  }
  //if they choose "Confirm" for special characters to be in their password
  if (specialCase) {
    passwordLength += allCharacters.substring(62);
  }
    // if the user says cancel/no to all prompts
  else {
    alert('Please select at least one option');
    return;
  }
  // this links the user input to the id that displays the password to the user
  var password = generatePassword(userInput);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
