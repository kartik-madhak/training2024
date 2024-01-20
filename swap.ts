function swap<T>(arr: T[], firstPosition: number, secondPosition: number): void {
    const temp: T = arr[firstPosition];
    arr[firstPosition] = arr[secondPosition];
    arr[secondPosition] = temp;
}

const arr = [0, 1, 2, 3, 4];

console.log(arr);
swap(arr, 1, 4);
console.log(arr);
