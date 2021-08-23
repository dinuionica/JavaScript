/* assignment 5 */

let myCountry = {
    country: 'Romania',
    capital: 'Bucharest',
    language: 'Romanian',
    population: 300000,
    neighbours: ['Bulgary', 'Ucraine','Ungary'],

    describe: function() {
        return (`${this.country} has ${this.population} million finnish-speaking people,
        ${this.neighbours.length} neighbouring countries
        and a capital called ${this.capital}.`)
    },

    checkIsland: function() {
        if (this.neighbours.length == 0) {
            this.isIsland = true;
        } else {
            this.isIsland = false;
        }
    }
}

const information = `${myCountry.country} has ${myCountry.population} million finnish-speaking people,
${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`

console.log(information);
console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);