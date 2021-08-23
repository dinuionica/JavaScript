/* assignment 2 */

let worldPopulation = 7900;
/* function declaration */
function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const percentageChina = percentageOfWorld1(1441);
console.log(percentageChina);

/* function expression */
const percentageOfWorld2 = function(population) {
    return (population / worldPopulation) * 100;
}

const percentageChina2 = percentageOfWorld2(1441);
console.log(percentageChina2);
