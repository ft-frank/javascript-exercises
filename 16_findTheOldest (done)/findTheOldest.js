const findTheOldest = function(people) {
    const orderedAgePeople = people.sort(
        (a,b) => (findAge(b) - findAge(a))
    )
    return orderedAgePeople[0] }

function findAge (person) {
    if (person.yearOfDeath == undefined){
        age = 2025 - person.yearOfBirth
    }
    else{
        age = person.yearOfDeath - person.yearOfBirth}
    return age
}

// Do not edit below this line
module.exports = findTheOldest;
