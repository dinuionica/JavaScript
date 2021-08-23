/* objects */

/* declaration */
let John = {
    /* attributes */
    firstName: 'Ionica',
    lastName: 'Dinu',
    birdthYear: 2001,
    friends: ['Rares', 'Sergiu', 'Ionica'],
    isStudent: true,
    /* methods */
    calcAge: function() {
        return 2021 - this.birdthYear;
    }
};

/* first acces */
console.log(John['firstName']);

/* second acces */
console.log(John.firstName);
console.log(John.lastName);
console.log(John.calcAge());
