// Assignment code here
function generatePassword() {
  let uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let special = [
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    "@",
    "%",
    "+",
    "\\",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];

  // get input and validate
  numberOfCharacters = prompt(
    "How many characters do you want in your password? Choose between 8-128 characters."
  );
  if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  } else if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
  }

  let hasObject = {};
  if( confirm("Do you want lowercase characters?")){
    hasObject.hasLowercase = lowercase;
  };
  if(confirm("Do you want to use numbers?")){
    hasObject.hasUppercase = uppercase;

  }
  if(confirm("Do you want uppercase characters?")){
    hasObject.hasNumbers = numbers;

  }
  if(confirm("Do you want special characters?")){
    hasObject.hasSpecial = special;

  }

  let numberOfLowercase = 0;
  let numberOfUppercase = 0;
  let numberOfNumbers = 0;
  let numberOfSpecialCharacters = 0;

  if (
    !hasObject.hasLowercase &&
    !hasObject.hasUppercase &&
    !hasObject.hasNumbers &&
    !hasObject.hasSpecial 
  ) {
    return "select one character type.";
  }

  let numberOfKeys = Object.keys(hasObject).length;

  // group selected characters
  if (hasObject.hasLowercase) {
    numberOfLowercase = Math.floor(Math.random() * (numberOfCharacters-numberOfKeys));
    numberOfCharacters = numberOfCharacters - numberOfLowercase;
    numberOfKeys = numberOfKeys - 1;
  }
  if (hasObject.hasUppercase) {
    numberOfUppercase = Math.floor(Math.random() * (numberOfCharacters-numberOfKeys));
    numberOfCharacters = numberOfCharacters - numberOfUppercase;
    numberOfKeys = numberOfKeys - 1;
  }
  if (hasObject.hasNumbers) {
    numberOfNumbers = Math.floor(Math.random() * (numberOfCharacters-numberOfKeys));
    numberOfCharacters = numberOfCharacters - numberOfNumbers;
    numberOfKeys = numberOfKeys - 1;
  }
  if (hasObject.hasSpecial) {
    numberOfSpecialCharacters = Math.floor(Math.random() * (numberOfCharacters-numberOfKeys));
    numberOfCharacters = numberOfCharacters - numberOfSpecialCharacters;
    numberOfKeys = numberOfKeys - 1;
  }

  let keys = Object.keys(hasObject);
  numberOfKeys = keys.length;
  let password = "";

  while(numberOfKeys > 0){
    let random =  Math.floor(Math.random() * numberOfKeys);
    let character = hasObject[keys[random - 1]];
  }
  // pick random cards out of new pool for length of password
  
  
  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
