// YOUR CODE BELOW
const veryOddMutant = (allTheNums) => {
    let evenCount = 0; 

    for (let i = 0; i < allTheNums.length; i++) {
        if (allTheNums[i] % 2 === 0) {
            allTheNums[i] = 'normie';
            evenCount++;
        }
    }
    return evenCount;
}