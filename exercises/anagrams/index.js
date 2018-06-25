// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function normalize(str){
//     return str.replace(/\[ˆ\w]/g,'').toLowerCase();
// }

function normalize(str){
    return str.replace(/\[ˆ\w]/g,'').toLowerCase().split('').sort().join('');
}

// function createDict(str){
//     let dict = [];
//     new Set(str).forEach(element => {
//         dict[element] = str.split(element).length - 1;
//     });
//     return dict;
// }

// function anagrams(stringA, stringB) {
//     dictA = createDict(normalize(stringA));
//     dictB = createDict(normalize(stringB));
//     return dictA.length == dictB.length && Object.keys(dictA).every(((elm) => dictA[elm] == dictB[elm]));
// }

function anagrams(stringA, stringB){
    return normalize(stringA) === normalize(stringB);
}

module.exports = anagrams;
