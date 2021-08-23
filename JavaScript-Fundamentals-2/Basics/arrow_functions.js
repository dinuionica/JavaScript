/* arrow functions */

const age = birdthYear => 2021 - birdthYear;

const ageStudent = age(2001);
console.log(ageStudent);

const displayAge = (birdthYear, firstame) => {
    return `${firstame} is ${2021 - birdthYear} years old!`;
}

const myAge = displayAge(2001, 'Ionica');
console.log(myAge);