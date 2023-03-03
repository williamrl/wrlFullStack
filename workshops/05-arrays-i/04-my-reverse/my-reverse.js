// YOUR CODE BELOW
// Define a function `myReverse` that accepts an array.

// `myReverse` should return a new array with the elements in reverse order.

// ```javascript
// myReverse([1, 2, 3]);    // => [3, 2, 1]
// ```

// Do not use the built-in [.reverse method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) for this problem. You can use it on all
// future problems though!

const myReverse = (arr) => {
    let reverseArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }

    return reverseArr;
}