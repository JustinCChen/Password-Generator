let specialCharacters = ["'",'!','^','{','~','-','.','_','[',']','}','(',')',',',':','?','$','#','/','\\','+','%','@',];
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];  
let lowerCasedCharacters = ['a','b','c','d','e','d','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z']; 
let upperCasedCharacters = ['A','B','C','D','E','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];



function getPasswordOptions() {
  let length = parseInt(
    prompt('How many characters would you like your password to contain?'),10);
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }
  let hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  let hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  let hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  let hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return null;
  }
  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;
}

function getNum(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  let options = getPasswordOptions();
  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = [];
  if (!options) return null;
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getNum(specialCharacters));
  }
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getNum(numericCharacters));
  }
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getNum(lowerCasedCharacters));
  }
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getNum(upperCasedCharacters));
  }
  for (let i = 0; i < options.length; i++) {
    let possibleCharacter = getNum(possibleCharacters);

    result.push(possibleCharacter);
  }
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

