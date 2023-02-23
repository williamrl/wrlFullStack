// YOUR CODE BELOW
// Define a function `greeting` that accepts an optional string argument called
// name. `greeting` should return a personalized string if the name is present.

// ```javascript
// greeting('Sadie'); // => Hello Sadie!
// greeting(); // => Hello!
// ```

const greeting = (name) => {
    if (name !== undefined) {
        return `Hello ${name}!`
    } else {
        return 'Hello!'
    }
}