// YOUR CODE BELOW
const functionLogger = (callback, argument) => {
    console.log("Function starting")

    let returnedValue =  callback(argument);

    console.log('Function complete');

    return returnedValue;
}