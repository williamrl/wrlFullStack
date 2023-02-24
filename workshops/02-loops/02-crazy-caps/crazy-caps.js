// YOUR CODE BELOW
// Define a function, `crazyCaps`, that accepts a string as an argument.
// `crazyCaps` should return a string in which every other character is
// capitalized. The first letter should be lower-cased.

// ```javascript
// crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
// ```

const crazyCaps = (str) => {
    let everyOther = '';

    for (let i = 0; i < str.length; i++) {
        let everyOtherChar = str[i];

        if (i % 2 === 0) {
            everyOther += everyOtherChar;
        } else {
            everyOtherChar = everyOtherChar.toUpperCase();
            everyOther += everyOtherChar;
        }
    }
    return everyOther;
}