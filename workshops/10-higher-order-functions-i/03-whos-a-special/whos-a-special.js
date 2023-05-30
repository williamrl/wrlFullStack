// YOUR CODE BELOW
const whosASpecial = (specialPets) => {
    let str = '';

    specialPets.forEach(function(petObject, idx) {
        str += `${petObject.name} the ${petObject.species} is very special!`;

        if (idx < specialPets.length - 1) {
            str += ' ';
        }
    });

    return str;
}