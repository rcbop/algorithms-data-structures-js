// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//        1
//       '#'
//   pyramid(2)
//        123
//       ' # '
//       '###'
//   pyramid(3)
//        12345
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       1234567
//      'xxx#xxx'
//      'xx###xx'
//      'x#####x'
//      '#######'
//   pyramid(5)
//       012345678 (9)
//    0 '    #    '
//    1 '   ###   '
//    2 '  #####  '
//    3 ' ####### '
//    4 '#########'
function pyramid(n, row = 0, level = ''){
    if (row === n) return;

    let columns = 2 * n - 1;

    if (level.length === columns){
        console.log(level);
        return pyramid(n, row + 1);
    }

    let middle = Math.floor(columns/2);
    if (level.length < middle - row || level.length > middle + row){
        level+=' ';
    } else {
        level+='#';
    }

    pyramid(n, row, level);
}

// function pyramid(n) {
//     let columns = 1+(n-1)*2;
//     let middle = Math.floor(columns/2);
//     for (let row = 0; row < n; row++) {
//         let step = '';
//         for (let col = 0; col < columns; col++) {
//             if (col < middle - row || col > middle + row){
//                 step+=' ';
//             } else {
//                 step+='#';
//             }
//         }
//         console.log(step);
//     }
// }

module.exports = pyramid;
