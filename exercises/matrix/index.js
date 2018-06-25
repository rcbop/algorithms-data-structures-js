// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// 0,0 0,1 0,2
// 1,0 1,1 1,2
// 2,0 2,1 2,2

function matrix(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    // console.log(result);

    let startRow = 0;
    let startCol = 0;
    let endRow = result.length - 1;
    let endCol = result.length - 1;
    let position = 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let x = startCol; x <= endCol; x++) {
            result[startRow][x] = position++;
            // console.log(start_row,x);
        }
        startRow++;

        for (let y = startRow; y <= endRow; y++) {
            result[y][endCol] = position++;
            // console.log(y,end_col);
        }
        endCol--;

        for (let z = endCol; z >= startCol; z--){
            result[endRow][z] = position++;
            // console.log(z,end_row+1);
        }
        endRow--;

        for (let w = endRow; w >= startRow; w--) {
            result[w][startCol] = position++;
            // console.log(w,start_col);
        }
        startCol++;
    }
    // console.log(result.join('\n'));
    return result;
}

module.exports = matrix;
