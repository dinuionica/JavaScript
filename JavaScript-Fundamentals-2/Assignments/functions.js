'use strict'
/* assignment 1 */

function describeCountry(country, population, capitalCity) {
    const informations = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return informations;
}

const informationsCountry = describeCountry("Rusia", 6, "Moscow");
console.log(informationsCountry);


const informationsCountry2 = describeCountry("Portugal", 3, "Lisabona");
console.log(informationsCountry2);
