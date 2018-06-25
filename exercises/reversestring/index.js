// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str){
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

function reverse(str){
    // debugger;
    return str.split('').reduce((reversed, elm)=> {
        return elm + reversed;
    }, '');     
}

function reverseVowels(str){
    let vowels = str.match(/[aeiou]/ig).reverse();
    let arr = str.split(/[aeiou]/ig);

    for (let i = 0; i < arr.length -1; i++ ){
        arr[i] = arr[i].concat(vowels.shift());
    }
    return arr.join('');
}

// reverse('asdf');

module.exports = { reverse, reverseVowels };