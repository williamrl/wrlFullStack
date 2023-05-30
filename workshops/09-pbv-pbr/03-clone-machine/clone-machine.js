// YOUR CODE BELOW
const cloneMachine = (animalObj) => {
    let clonedAnimal = {
        name: animalObj.name + 'Clone',
        species: animalObj.species,
        offspring: [],
    };

    animalObj.offspring.push(clonedAnimal.name);

    return clonedAnimal;
}