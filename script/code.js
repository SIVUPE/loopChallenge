
function displayMiddleNumber(numbers) {
    let middleIndex = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        // If the array has an even length, return two elements
        return [numbers[middleIndex - 1], numbers[middleIndex]];
    } else {
        // If the array has an odd length, return a single element
        return numbers[middleIndex];
    }
}

// Given array
let numbers = [12, 18, 11, 5, 8, 2];

// Call the function and display the result
console.log(displayMiddleNumber(numbers));