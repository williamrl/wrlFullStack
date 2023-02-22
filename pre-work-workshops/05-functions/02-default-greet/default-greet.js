// // YOUR CODE BELOW
// Define a function, `defaultGreet`, that takes a first and a last name.
// `defaultGreet` should return a string greeting for the given names. If the user
// does not define a last name, assume the last name is 'Doe'.

// ```javascript
// defaultGreet('Chaka', 'Khan'); // => 'Hi Chaka Khan!'
// defaultGreet('John'); // => 'Hi John Doe!'
// ```

const defaultGreet = (firstName, lastName = 'Doe') => {
    let greeting = '';
    if (lastName !== undefined) {
        greeting = `Hi ${firstName} ${lastName}!`
    }
    else if (lastName === undefined) {
        greeting = `Hi ${firstName} ${lastName}!`;
    }

    return greeting;

}

console.log(defaultGreet('Chaka', 'Khan'));

