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
  if (confirm("Do you want lowercase characters?")) {
    hasObject.hasLowercase = lowercase;
  }
  if (confirm("Do you want to use uppercase characters?")) {
    hasObject.hasUppercase = uppercase;
  }
  if (confirm("Do you want numbers?")) {
    hasObject.hasNumbers = numbers;
  }
  if (confirm("Do you want special characters?")) {
    hasObject.hasSpecial = special;
  }

  let numberOfLowercase = 0;
  let numberOfUppercase = 0;
  let numberOfNumbers = 0;
  let numberOfSpecial = 0;

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
    if(numberOfKeys === 1){
      numberOfLowercase = numberOfCharacters;
    } else {
    numberOfLowercase = Math.floor(
      Math.random() * (numberOfCharacters - numberOfKeys)
    ) + 1;
    numberOfCharacters = numberOfCharacters - numberOfLowercase;
    numberOfKeys = numberOfKeys - 1;
    }
  }
  if (hasObject.hasUppercase) {
    if(numberOfKeys === 1){
      numberOfUppercase = numberOfCharacters;
    } else {
    numberOfUppercase = Math.floor(
      Math.random() * (numberOfCharacters - numberOfKeys)
    ) + 1;
    numberOfCharacters = numberOfCharacters - numberOfUppercase;
    numberOfKeys = numberOfKeys - 1;
    }
  }
  if (hasObject.hasNumbers) {
    if(numberOfKeys === 1){
      numberOfNumbers = numberOfCharacters;
    } else {
    numberOfNumbers = Math.floor(
      Math.random() * (numberOfCharacters - numberOfKeys)
    ) + 1;
    numberOfCharacters = numberOfCharacters - numberOfNumbers;
    numberOfKeys = numberOfKeys - 1;
    }
  }
  if (hasObject.hasSpecial) {
    if(numberOfKeys === 1){
      numberOfSpecial = numberOfCharacters;
    } else {
      numberOfSpecial = Math.floor(
        Math.random() * (numberOfCharacters - numberOfKeys)
      ) + 1;
      numberOfCharacters = numberOfCharacters - numberOfSpecial;
      numberOfKeys = numberOfKeys - 1;
    } 
  }

  let keys = Object.keys(hasObject);
  numberOfKeys = keys.length;
  let password = "";

  while (numberOfKeys > 0) {
    let random = Math.round(Math.random() * (numberOfKeys - 1));
    let key = keys[random];
    if (key === "hasLowercase") {
      let character =
        lowercase[Math.floor(Math.random() * (lowercase.length - 1))];
      password = password + character;
      numberOfLowercase = numberOfLowercase - 1;

      if (numberOfLowercase === 0) {
        numberOfKeys = numberOfKeys - 1;
        let index = keys.indexOf(key);
        if (index > -1) {
          // only splice array when item is found
          keys.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    } else if (key === "hasUppercase") {
      let character =
        uppercase[Math.floor(Math.random() * (uppercase.length - 1))];
      password = password + character;
      numberOfUppercase = numberOfUppercase - 1;

      if (numberOfUppercase === 0) {
        numberOfKeys = numberOfKeys - 1;
        let index = keys.indexOf(key);
        if (index > -1) {
          // only splice array when item is found
          keys.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    } else if (key === "hasNumbers") {
      let character = numbers[Math.floor(Math.random() * (numbers.length - 1))];
      password = password + character;
      numberOfNumbers = numberOfNumbers - 1;

      if (numberOfNumbers === 0) {
        numberOfKeys = numberOfKeys - 1;
        let index = keys.indexOf(key);
        if (index > -1) {
          // only splice array when item is found
          keys.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    } else if (key === "hasSpecial") {
      let character = special[Math.floor(Math.random() * (special.length - 1)) ];
      password = password + character;
      numberOfSpecial = numberOfSpecial - 1;

      if (numberOfSpecial === 0) {
        numberOfKeys = numberOfKeys - 1;
        let index = keys.indexOf(key);
        if (index > -1) {
          // only splice array when item is found
          keys.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    }
  }

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

