// YOUR CODE BELOW
const mySplice = (anArr, startIdx, deleteCount, ...args) => {
    //store the beginning of the array
    const startElements = [];
    //store the deleted elements
    const deletedElements = [];

    //take everything from before the startIdx and store it in the startElements array
    for (let i = 0; i < startIdx; i++) {
        startElements.push(anArr.shift());
    }

    //then delete everything by removing an element per deletecount from the start of the array
    for (let i = 0; i < deleteCount; i++) {
        deletedElements.push(anArr.shift());
    }

    //anArr.unshift(spliceArg);
    //Insert the added elements into the array
    for (let i = args.length - 1; i >= 0; i--) {
        const currentArg = args[i];

        anArr.unshift(currentArg);
    }

    //reattach the beginning elements onto the array
    for (let i = startElements.length - 1; i >= 0; i--) {
        const currentStartElement = startElements[i];

        anArr.unshift(currentStartElement);
    }

    //return the deleted elements
    return deletedElements;

}