var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  //Prompts user with password criteria

  //Do while loop is used to ensure that a password is inputted into the prompt text between the set boundaries.
  do {
    var passwordLength = parseInt(
      prompt('Please pick a password length between 8 and 128 characters long.')
    );
    if (
      passwordLength === null ||
      Number.isInteger(passwordLength) === false ||
      passwordLength < 8 ||
      passwordLength > 128
    ) {
      alert('Please only input a whole number that is between 8 and 128.');
      return;
    }
  } while (passwordLength < 8 || passwordLength > 128);
  var lowercase = confirm('Would you like to include lowercase letters?');
  var uppercase = confirm('Would you like to include uppercase letters?');
  var numbers = confirm('Would you like to include numbers?');
  var specialChars = confirm('Would you like to include special characters?');

  //If cancel is selected for all , then the alert below is displayed and the password generation is ended.
  if (
    lowercase === false &&
    uppercase === false &&
    numbers === false &&
    specialChars === false
  ) {
    alert('Must select at least one criteria option!');
    return;
  }

  //Empty criteria array and all other criteria arrays are initialized.
  var criteria = [];
  var lowercaseArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  var uppercaseArray = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharsArray = [
    '!',
    '#',
    '$',
    '%',
    '&',
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '^',
    '_',
    '|',
    '~',
  ];
  var passwordString = '';
  var count = 0;

  //Pushes our various criteria specific arrays to our blank criteria array if user confirms they want them included.
  if (lowercase) {
    criteria.push(...lowercaseArray);
    passwordString +=
      criteria[Math.floor(Math.random() * lowercaseArray.length)]; //Pushes random character from this criteria to the overall criteria array to ensure a character makes it into the password in the end regardless of random chance.
    count++;
  }
  if (uppercase) {
    criteria.push(...uppercaseArray);
    passwordString +=
      criteria[Math.floor(Math.random() * uppercaseArray.length)];
    count++;
  }
  if (numbers) {
    criteria.push(...numbersArray);
    passwordString += criteria[Math.floor(Math.random() * numbersArray.length)];
    count++;
  }
  if (specialChars) {
    criteria.push(...specialCharsArray);
    passwordString +=
      criteria[Math.floor(Math.random() * specialCharsArray.length)];
    count++;
  }

  //Calls the generatePassword function and saves return value to variable called password.
  var password = generatePassword();

  //Possibly puts the generated password into the text area on the page???
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

  //Function that uses a for loop that iterates the length of the password desired by user.
  //It generates a random character/letter/number each iteration based on criteria array built earlier and appends to new password array.
  function generatePassword() {
    for (i = 0; i < passwordLength - count; i++) {
      var randomCharacter = Math.floor(Math.random() * criteria.length);
      // Pushes randomCharacter to our password array each iteration.
      passwordString += criteria[randomCharacter];
    }
    return passwordString;
  }
}
function copyPassword() {
  var copyText = document.getElementById('password');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Copied your password');
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
