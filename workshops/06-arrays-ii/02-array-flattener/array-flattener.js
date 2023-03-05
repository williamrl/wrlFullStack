// YOUR CODE BELOW
// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
// argument.

// `arrayFlattener` should return a new, one-dimensional array.

// ```javascript
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
// ```


const arrayFlattener = (arrayTwoD) => {
    let arrayOneD = [];

    for (let i = 0; i < arrayTwoD.length; i++) {
        let element = arrayTwoD[i];

        if (Array.isArray(element)) {
            for (let j = 0; j < element.length; j++) {
                let innerEle = element[j];
                
                arrayOneD.push(element[j]);
            }
        } else {
            arrayOneD.push(element);
        }
    }
    return arrayOneD;
}

console.log(arrayFlattener([1,[2, 3], 4]));