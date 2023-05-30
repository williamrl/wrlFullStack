// YOUR CODE BELOW
const finderFunction = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        let found = callback(element);
        if (found) {
            return i
        }
    }
    return -1;
}