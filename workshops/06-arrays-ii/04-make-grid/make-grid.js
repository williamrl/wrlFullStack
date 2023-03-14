// YOUR CODE BELOW
// Write a function `makeGrid` that accepts two arguments:
// 1. numColumns (number)
// 2. numRows (number)

// `makeGrid` should return a two-dimensional array that represents a grid of the
// given dimensions.

// ```javascript
// makeGrid(3,4);
// /* => [[1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3]]
// */
// ```

const makeGrid = (numColumns, numRows) => {
    const makeARow = () => {
        let aRow = [];

        for (let i = 1; i <= numColumns.length; ++i) {
            aRow.push(i);
        }
        return aRow;
    }

    let grid = [];

    for (let i = 0; i < numRows.length; ++i) {
        grid.push(makeARow());
    }
    return grid;
}

console.log(makeGrid(3, 4)); 