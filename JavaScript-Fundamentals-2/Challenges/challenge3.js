/* challenge 3 */

const Mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
}

const John = {
    name: 'John',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
}

if (John.calcBMI() > Mark.calcBMI()) {
    console.log(`John's BMI (${John.calcBMI()}) is higher than Mark's (${Mark.calcBMI()})!`);
} else {
    console.log(`Mark's BMI (${Mark.calcBMI()}) is higher than John's (${John.calcBMI()})!`);
}