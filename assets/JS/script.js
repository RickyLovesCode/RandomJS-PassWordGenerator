// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["@", "#", "$", "%", "^", "&", "*", "!"]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function userPrompt() {
    var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    console.log("message");
    if (isNaN(passwordLength) === true) {
        alert("Please pick a number");
        return;
    }
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please pick a number between 8 - 128")
        return;
    }
    var includeSpecial = confirm("Would you like to use special characters?");
    var includeUpperCase = confirm("Would you like to use upperCase characters?");
    var includeLowerCase = confirm("Would you like to use lowercase?");
    var includeNumbers = confirm("would you like to use special characters?");


    if (
        includeSpecial === false &&
        includeUpperCase === false &&
        includeLowerCase === false &&
        includeNumbers === false
    ) {
        alert("Please select one");
        return;
    }
    var userChoices = {
        passwordLength: passwordLength,
        includeSpecial: includeSpecial,
        includeUpperCase: includeUpperCase,
        includeLowerCase: includeLowerCase,
        includeNumbers: includeNumbers


    };
    return userChoices;

}

function generatePassword() {
    var passwordOptions = userPrompt();
    var possiblecombo = [];
    var finalpassword = []
    console.log(passwordOptions);

    if (passwordOptions.includeSpecial) {
        for (var i of specialChar)
            possiblecombo.push(i);
    }
    if (passwordOptions.includeUpperCase) {
        for (var i of upperCase)
            possiblecombo.push(i);
    }
    if (passwordOptions.includeLowerCase) {
        for (var i of lowerCase)
            possiblecombo.push(i);
    }
    if (passwordOptions.includeNumbers) {
        for (var i of numbers)
            possiblecombo.push(i);
    }

    console.log(possiblecombo);

    for (var i = 0; i < passwordOptions.passwordLength; i++) {
        var randomcharectar = Math.floor(Math.random() * possiblecombo.length);
        finalpassword.push(possiblecombo[randomcharectar])
        // console.log(upperCase[randomcharectar]);
    }

    console.log(finalpassword.join(""));

    writePassword(finalpassword.join(""));

}


// Write password to the #password input
function writePassword(finalpassword) {
    var passwordText = document.querySelector("#password");

    passwordText.innerHTML = finalpassword;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);

