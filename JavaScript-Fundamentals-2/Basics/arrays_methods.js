/* arrays methods */

const color = ['white', 'red', 'green', 'blue'];

/* push -> add a new element at the last position */
color.push('black');
console.log(color);

/* unshift -> add a new element at the first position */
color.unshift('orange');
console.log(color);

/* pop -> remove the last element */
color.pop();
console.log(color);

/* shift -> remove the first element */
color.shift();
console.log(color);

/* reverse -> reverse the array */
color.reverse();
console.log(color);

/* indeOf -> return the index of an element */
console.log(color.indexOf('red'));

/* includes -> return true if an element exist in array */
console.log(color.includes('white'));
