// YOUR CODE BELOW
// Write a function `maxOfThree` that accepts three number arguments. `maxOfThree`
// should return largest number of the three.

// ```javascript
// maxOfThree(5, 4, 10); // => 10

// maxOfThree(7, 7, 4); // => 7
// ```

const maxOfThree = (numOne, numTwo, numThree) => {
    if (numOne > numTwo && numOne > numThree) {
        return numOne
    }

    if (numTwo > numOne && numTwo > numThree) {
        return numTwo;
    }

    if (numThree > numOne && numThree > numTwo) {
        return numThree;
    }
}