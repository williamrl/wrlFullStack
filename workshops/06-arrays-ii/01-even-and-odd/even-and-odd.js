// YOUR CODE BELOW
// Define a function, `evenAndOdd`, that accepts an array.

// `evenAndOdd` should return a new array. The first element in the new array
// should be an array with all of the even numbers from the original array. The
// second element in the new array should be an array with all of the odd numbers
// from the original array.

// ```javascript
// evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
// ```


const evenAndOdd = (arr) => {
    let oddArray = [];
    let evenArray = [];

    for (let i = 0; i < arr.length; i++) {
        let nums = arr[i];

        if (arr[i] % 2) {
            oddArray.push(arr[i]);
        } else {
            evenArray.push(arr[i]);
        }
    }
    
    return [evenArray, oddArray];
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));