// YOUR CODE BELOW
// Write a function `unShift` that takes an array and a value of any type as arguments.

// `unShift` should return a new array, with the given value as the first element
// in the new array.

// ```javascript
// unShift([1, 2, 3], 0); / => [0, 1, 2, 3];
// ```

// Do not use the built-in .shift method for this problem!


//const unShift = (arr, value) => [value, ...arr]; //new spread operator ... (makes the new array and ... takes arr and spreads it across the new arr)
    // .concat : take one array and append another onto its end
    // return [value].concat(arr);

    // function myUnshift(originalArray, value) {

    //     // create a new array, with the value as the first element
    //     let newArray = [value];
      
    //     // loop through the entire originalArray
    //     for (let i = 0; i < originalArray.length; i++) {
      
    //       // store each element in a variable (optional)
    //       let element = originalArray[i];
      
    //       // push every element into the new array
    //       newArray.push(element);
    //     }
      
    //     // return the new array after the for loop
    //     return newArray;
    // }

    const myUnshift = (arr, value) => [value, ...arr];