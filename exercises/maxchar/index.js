// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let dict = [];
    new Set(str).forEach((char) => {
       dict[char] = str.split(char).length-1; 
    });
    debugger
    return Object.keys(dict).reduce((a, b) => dict[a] > dict[b] ? a : b);
}

module.exports = maxChar;
