// YOUR CODE BELOW
// Write a function `onlyOne` that accepts three arguments of any type.

// `onlyOne` should return true only if exactly one of the three arguments are
// truthy. Otherwise, it should return false.

// Do not use the equality operators (`==` and `===`) in your solution.

// ```javascript
// onlyOne(false, false, true); // => true
// onlyOne(0, 1, 2) // => false
// ```


const onlyOne = (argOne, argTwo, argThree) => {
    if (!!argOne && !argTwo && !argThree) {
        return true;
    }
    if (!!argTwo && !argOne && !argThree) {
        return true;
    }
    if (!!argThree && !argOne && !argTwo) {
        return true;
    }

    return false;
}

console.log(onlyOne(false, false, true));
console.log(onlyOne(0, 1, 2));