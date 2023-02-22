let boolean1 = true, boolean2 = true;
// let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
// let boolean1 = false, boolean2 = false;

let result;

// YOUR CODE BELOW

// Given two boolean values boolean1 and boolean2, set the result variable to:
//   - 'both' if both boolean1 and boolean2 are true
//   - 'one' if only one of boolean1 and boolean2 are true
//   - 'none' if neither value is true

if (boolean1 === true && boolean2 === true) {
    result = 'both';
}
if (boolean1 === true && boolean2 === false || boolean2 === true && boolean1 === false) {
    result = 'one';
}
if (boolean1 === false && boolean2 === false) {
    result = 'none';
}