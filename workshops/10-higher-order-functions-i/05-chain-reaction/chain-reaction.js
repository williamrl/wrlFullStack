// YOUR CODE BELOW
const chainReaction = (startValue, callbacks) => {
    callbacks.forEach(function(callback) {
        value = callback(value);
    });

    return value;
}