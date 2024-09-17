const findTheOldest = function (peopleArr) {
  const getAge = (person) => {
    if (person.hasOwnProperty("yearOfDeath")) {
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return new Date(Date.now()).getFullYear() - person.yearOfBirth;
    }
  };
  const oldestPerson = peopleArr.reduce(
    (oldestPerson, currentPerson) => {
      currentPerson.age = getAge(currentPerson);
      return currentPerson.age > oldestPerson.age
        ? currentPerson
        : oldestPerson;
    },
    { age: 0 }
  );
  delete oldestPerson.age;
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
