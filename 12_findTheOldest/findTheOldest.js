function getAge(person) {
    if (!person.yearOfDeath)
        person.yearOfDeath = new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(ppl) {
    return ppl.reduce((min, current) => (getAge(min) > getAge(current)) ? min: current);
};

// Do not edit below this line
module.exports = findTheOldest;
