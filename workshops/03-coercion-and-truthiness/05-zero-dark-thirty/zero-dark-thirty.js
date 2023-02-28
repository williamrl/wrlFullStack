// YOUR CODE BELOW
// Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

// `zeroDarkThirty` should return a number with all of the zeroes removed:

// ```javascript
// zeroDarkThirty(102302) // => 1232
// zeroDarkThirty(606.203) // => 66.23
// ```

// If the number 0 is passed in as the argument, return [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

// ```javascript
// zeroDarkThirty(0) // => NaN
// ```

const zeroDarkThirty = (numOne) => {
    if (numOne === 0) {
        return NaN;
    }

    numOne = String(numOne);

    let newNum = '';

    for (let i = 0; i < numOne.length; i++) {
        let currentChar = numOne[i]

        if (currentChar !== '0') {
            newNum += currentChar;
        }
    }
    return Number(newNum);
}