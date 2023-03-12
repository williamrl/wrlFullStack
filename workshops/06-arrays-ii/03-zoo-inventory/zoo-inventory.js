// YOUR CODE BELOW
// Define a function, `zooInventory`, that accepts a multi-dimensional array of
// animal facts.

// `zooInventory` should return a new, flat array. Each element in the new array
// should be a sentence about each of the animals in the zoo.

// ```javascript
// let myZoo = [
//   ['King Kong', ['gorilla', 42]],
//   ['Nemo', ['fish', 5]],
//   ['Punxsutawney Phil', ['groundhog', 11]]
// ];

// zooInventory(myZoo);
// /* => ['King Kong the gorilla is 42.',
//        'Nemo the fish is 5.'
//        'Punxsutawney Phil the groundhog is 11.']
// */
// ```

const zooInventory = (animalFactsMDA) => {
    let emptyArr = [];

    for (let i = 0; i < animalFactsMDA.length; i++) {
        let element = animalFactsMDA[i];

        let name = element[0];
        let species = element[1][0];
        let age = element[1][1];

        let sentence = `${name} the ${species} is ${age}.`;

        emptyArr.push(sentence);
    }
    return emptyArr;
}

let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
];

console.log(zooInventory(myZoo));