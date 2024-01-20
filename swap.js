"use strict";
function swap(arr, firstPosition, secondPosition) {
    const temp = arr[firstPosition];
    arr[firstPosition] = arr[secondPosition];
    arr[secondPosition] = temp;
}
const arr = [0, 1, 2, 3, 4];
console.log(arr);
swap(arr, 1, 4);
console.log(arr);
