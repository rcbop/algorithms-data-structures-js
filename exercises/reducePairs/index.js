
function reducePairs(input){
    
    let arrChars = input.split('');
    let breakLoop = false;

    while (!breakLoop && arrChars.length > 1) {
        
        const middle = Math.floor((arrChars.length - 1) / 2);

        if (arrChars[middle] && arrChars[middle+1] && arrChars[middle] == arrChars[middle+1]) {
            arrChars.splice(middle,2);
        } else if (arrChars[middle] && arrChars[middle-1] && arrChars[middle] == arrChars[middle-1]){
            arrChars.splice(middle-1, 2);
        } else {
            breakLoop = true;
        }
    }

    return arrChars.join('');
}

module.exports = reducePairs;