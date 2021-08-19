/* boolean operators */

/*
and, or and not

true and true => true
true and false => false

true or true => true
true or false => false

not true => false
*/

let hasDriveLicense = true;
let goodVisions = true;

console.log(hasDriveLicense && goodVisions);
console.log(hasDriveLicense && (!goodVisions));
console.log(hasDriveLicense || (!goodVisions));