
function generatePassword(length, includeLowercase, includeUpperrcase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUpperrcase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    console.log("Allowed characters:", allowedChars);

    if (allowedChars.length === 0) {
        return "Please select at least one character type!";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordlength = 12;
const includeLowercase = true;
const includeUpperrcase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
    passwordlength,
    includeLowercase,
    includeUpperrcase,
    includeNumbers,
    includeSymbols
);

console.log(`Generated password: ${password}`);
