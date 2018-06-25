// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    let indexOfMin;
    for (let i = 0; i < arr.length; i++) {
        indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) indexOfMin = j;
        }
        if (i != indexOfMin) swap(arr, i, indexOfMin);
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);

    return merge(mergeSort(arr.slice(0, center)), mergeSort(arr.slice(center)));
}

function merge(left, right) {
    const results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}

module.exports = {
    bubbleSort,
    selectionSort,
    merge,
    mergeSort
};