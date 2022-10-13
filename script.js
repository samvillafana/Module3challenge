// Grabs the button html element from the html page usinf the id attribute
const button = document.getElementById("button");
// Adds an event listener to the the button that says whenever the user clicks on the button fire off the startPrompts function
button.addEventListener("click", startPrompts);

// Define our global password criteria
let passwordLength = 0;
let requireLowerCase = false;
let requireUpperCase = false;
let requireNumbers = false;
let requireSpecial = false;

// Array of special characters to test against
let specialChars = `!#$%&()*+,-./:;<=>?@[]^_
{|}~`.split("");
let aplphaLow = "abcdefghijklmnopqrstuvwxyz";
let alphaHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789".split("");
let allChars = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_
{|}~`;


// function to start prompting the user
function startPrompts() {
    // Prompt the user and save their inputs to the global variables
    passwordLength = prompt("Please enter password length (8 to 128 characters)");
    if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
        alert("Password length must be between 8 and 128 characters!");
        passwordLength = prompt("Please enter password length");
    }
    requireLowerCase = prompt(
        "Require atleast one lowercase character?  (yes or no)"
    );
    requireUpperCase = prompt(
        "Require atleast one uppercase character?  (yes or no)"
    );
    requireNumbers = prompt(
        "Require atleast one numeric character?  (yes or no)"
    );
    requireSpecial = prompt("Require atleast one special character? (yes or no)");
    console.log(
        passwordLength,
        requireLowerCase,
        requireUpperCase,
        requireNumbers,
        requireSpecial
    );
    return generatePassword();
}

let generatedPassword = "";
console.log(generatedPassword)

function generatePassword() {
    let passWord = "";
    for (let i = 0; i <= passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * allChars.length);

        passWord += allChars[randomNum];
    }

    generatedPassword = passWord;
    console.log(generatedPassword)
    let hasLowerCase = checkLowerCase(generatedPassword);
    let hasUpperCase = checkUpper(generatedPassword);
    let hasNumber = checkNumeric(generatedPassword);
    let hasSpecial = checkSpecial(generatedPassword);

    if (!hasLowerCase) {
        console.log('here')
        let randNum = Math.floor(Math.random() * generatedPassword.length)
        generatedPassword.split('')[randNum] = aplphaLow.split('')[randNum];
    }
    if (!hasUpperCase) {
        console.log('here')
        let randNum = Math.floor(Math.random() * generatedPassword.length)
        generatedPassword.split('')[randNum] = alphaHigh.split('')[randNum];
    }
    if (!hasNumber) {
        console.log('here')
        let randNum = Math.floor(Math.random() * generatedPassword.length)
        generatedPassword.split('')[randNum] = numbers[randNum];
    }
    if (!hasSpecial) {
        console.log('here')
        let randNum = Math.floor(Math.random() * generatedPassword.length)
        generatedPassword.split('')[randNum] = specialChars[randNum];
    }


    return (document.getElementById("password").innerHTML = generatedPassword);
}

function checkLowerCase(generatedPassword) {
    if (requireLowerCase === "yes") {
        aplphaLow.split("").forEach((el) => {
            if (!generatedPassword.split("").indexOf(el) > -1) {
                return true;
            }
        });
        return false;
    } else {
        return "Lowercase not selected";
    }
}

function checkUpper(generatedPassword) {
    if (requireLowerCase === "yes") {
        alphaHigh.split("").forEach((el) => {
            if (generatedPassword.split("").indexOf(el) > -1) {
                return true;
            }
        });
        return false;
    } else {
        return "Uppercase not selected";
    }
}

function checkNumeric(generatedPassword) {
    if (requireLowerCase === "yes") {
        numbers.forEach((el) => {
            if (generatedPassword.split("").indexOf(el) > -1) {
                return true;
            }
        });
        return false;
    } else {
        return "Numeric not selected";
    }
}

function checkSpecial(generatedPassword) {
    if (requireLowerCase === "yes") {
        specialChars.forEach((el) => {
            if (generatedPassword.split("").indexOf(el) > -1) {
                return true;
            }
        });
        return false
    } else {
        return "Special not selected";
    }
}