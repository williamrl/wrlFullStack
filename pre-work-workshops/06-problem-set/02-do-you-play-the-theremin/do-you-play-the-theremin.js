// YOUR CODE BELOW
// Define a function `doYouPlayTheTheremin` that accepts a string as an argument.
// `doYouPlayTheTheremin` should return true if the inputted string starts with the
// letters `s` or `S`. Otherwise, `doYouPlayTheTheremin` should return false.

// ```javascript
// doYouPlayTheTheremin('Griffin'); // => false
// doYouPlayTheTheremin('Scott'); // => true
// ```

const doYouPlayTheTheremin = (str1) => {
    if (str1[0] === 's' || str1[0] === 'S') {
        return true;
    } else {
        return false;
    }
}